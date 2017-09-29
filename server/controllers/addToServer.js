module.exports = {
	updateCustomer: (req, res, next) => {
		console.log('updateCustomer ran. req.body = ', req.body)
		const { first_name, last_name, email, address, city, state, country, zip, phone } = req.body;
		console.log(first_name)
		var id = req.user.id;

		req.user = { id, first_name, last_name, email, address, city, state, country, zip, phone };

		const dbInstance = req.app.get('db');
		dbInstance.updateCustomerSQL([id, first_name, last_name, email, address, city, state, country, zip, phone])
			.then(() => res.redirect(302, 'http://localhost:3000/#/').send('customer updated')).catch(err => {
				console.log(err)
				res.status(500).send()
			})

	},

	addOrder: (req,res,next) => {
		// console.log('addOrder req.body =', req.body);
		// var id = req.user.id;
		// console.log('id=', id);
		// console.log('req.user fd', req.user.id);
		console.log('req.body.bag',req.body.bag);
		console.log('req.body.total',req.body.total);
		var stringBag = JSON.stringify(req.body.bag);
		console.log('stringBag',stringBag);
		const dbInstance = req.app.get('db');
		
		dbInstance.addOrderSQL([1, stringBag, req.body.total, 'no special notes'])
			.then(() => res.redirect(302, 'http://localhost:3000/#/order-complete')).catch(err => {
				console.log('addOrder Error',err)
				
			})


			
	}

}