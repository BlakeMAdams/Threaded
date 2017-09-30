module.exports = {
	updateCustomer: (req, res, next) => {
		console.log('updateCustomer ran. req.body = ', req.body)
		const { first_name, last_name, email, address, city, state, country, zip, phone } = req.body;
		console.log(first_name)
		var id = req.user.id;

		req.user = { id, first_name, last_name, email, address, city, state, country, zip, phone };

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
			.then(() => res.status(200))

	}

}