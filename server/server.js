require('dotenv').config();

const express = require('express')
, bodyParser = require('body-parser')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, massive = require('massive')
, session = require('express-session');

const app = express();
app.use(bodyParser.json());
//NEED TO REVISE
// app.use( express.static( `${__dirname}/../public/build` ) );

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

//MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

//DATABASE CONNECTION
massive(process.env.CONNECTIONSTRING).then( db => {
  app.set('db', db);
});

//AUTHENTICATION
passport.use(new Auth0Strategy({
	domain: process.env.AUTH_DOMAIN,
	clientID: process.env.AUTH_CLIENT_ID,
	clientSecret: process.env.AUTH_CLIENT_SECRET,
	callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, extraParams, profile, done) {
	// console.log(profile);
  const db = app.get('db');
  
  
	db.findCustomer(profile.id).then(user => {
    
		if (user[0]){
			return done(null, user[0]);
		} else {
			db.createCustomer([profile.id, profile.name.givenName, profile.name.familyName, profile.emails[0].value, profile._json.picture_large]).then( user => {
				return done(null, user);
			})
		}
	})
}));

//THIS IS INVOKED ONE TIME TO SET THINGS UP
passport.serializeUser(function(user, done) {
  
  var userInfo = {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    address: user.address,
    city: user.city,
    state: user.state,
    country: user.country,
    zip: user.zip,
    phone: user.phone,
    picture: user.picture
  }
  console.log('serializeUser triggered',userInfo);
  done(null, userInfo);
});

// won't run deserializeUser until hitting the endpoint 
//USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
passport.deserializeUser(function(userInfo, done){
  console.log('deserializeUser triggered. user = ', userInfo);
  done(null, userInfo)
  //PUTS ON req.user
});

//ENDPOINTS
//ENDPOINT #1 - AUTHORIZATION ENDPOINT
app.get('/api/auth/login', passport.authenticate('auth0'));

//ENDPOINT #2 - AUTHORIZATION ENDPOINT
app.get('/api/auth/callback', passport.authenticate('auth0', {
   successRedirect: 'http://localhost:3000/#/profile',
   failureRedirect: 'http://localhost:3000/#/login',
   failureFlash: true
 }));

//ENDPOINT #3
app.get('/api/auth/setCustomer', (req, res) => {
  if(!req.user) {
    return res.status(404).send('User not found')
   } else {
     console.log('customer info is set on req.user', req.user);
     return res.status(200).send(req.user); // or is it res.user ?
   }
 });

//ENDPOINT #4 (Logout)
app.post('/api/auth/logout', (req, res) => {
   req.logout() //PASSPORT GIVES US THIS TO TERMINATE A LOGIN SESSION
   return res.redirect(302, 'http://localhost:3000/#/'); //res.redirect comes from express to redirect user to the given url
     //302 is the status code for redirect
});




let PORT = 3030;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
