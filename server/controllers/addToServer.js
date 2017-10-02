require('dotenv').config();
module.exports = {
	updateCustomer: (req, res, next) => {
		console.log('updateCustomer ran. req.body = ', req.body)
		const { first_name, last_name, email, address, city, state, country, zip, phone } = req.body;

		var id = req.user.id;

		req.user = { id, first_name, last_name, email, address, city, state, country, zip, phone };
		console.log('req.user after reassignment in updateCustomer', req.user)


		const dbInstance = req.app.get('db');
		dbInstance.updateCustomerSQL([id, first_name, last_name, email, address, city, state, country, zip, phone])
			.then(() => res.status(200))

	},

	addOrder: (req, res, next) => {
		console.log('addOrder ran /Bag totalBag=', req.body.total)
		var id = req.user.id;
		var stringBag = JSON.stringify(req.body.bag);
		const dbInstance = req.app.get('db');
		dbInstance.addOrderSQL([id, stringBag, req.body.total, 'no special notes'])
			.then((order) => res.status(200).send(order))

	},

	nodeMail: (req, res, next) => {
		console.log('nodemail ran')
		console.log('req.body.bag', req.body)
		// console.log('req.user.id', req.user.id)
		
		const nodemailer = require('nodemailer');
		// var orderArray = [];
		// var orderBody = () => {
		// 	
		// 	req.body.data[0].bag.map((e, i) => {
		// 		orderArray.push(`<div><p>${e[0]}</p>
		// 	<p>${e[1]}</p>
		// 	<p>$${e[2]}</p>
		// 	<p>Measurements <br/>${JSON.stringify(e[5])}</p>
		// 	</div>`
		// 		)
		// 	})
		// 	 
		// };
		// orderArray.join(' ');
		// console.log('orderBody', orderArray)
		// console.log('req.user', req.user)
		// console.log('req.user.first_name', req.user.first_name)
		// var emailBody = req.user.first_name + "<p>, Thank You for your purchase!</p>"
		// 	+ "<br/>";
		// var emailText = " Thank You for your purchase of " ;
		// console.log('emailBody', emailBody)

		// Generate test SMTP service account from ethereal.email
		// Only needed if you don't have a real mail account for testing
		// nodemailer.createTestAccount((err, account) => {

			// create reusable transporter object using the default SMTP transport
			let transporter = nodemailer.createTransport({
					host: "Gmail",
					port: 465,
					secure: true,
					connectionTimeout : "7000",
					greetingTimeout : "7000",
			  
					auth: {
						user: process.env.EMAIL_UN,
						pass: process.env.EMAIL_PW
					  }
					
				})
			

			// setup email data with unicode symbols
			let mailOptions = {
				from: '"Threaded" <mpython18@hotmail.com>', // sender address
				to: 'blakemadams@gmail.com', // list of receivers
				subject: 'Your Order', // Subject line
				text: 'test', // plain text body
				html: 'test' // html body
			};

			// send mail with defined transport object
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					return console.log(error);
				}
				console.log('Message sent: %s', info.messageId);
				// Preview only available when sending through an Ethereal account
				console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

				// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
				// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
			});
		// });
	
		res.status(200);
	}

}