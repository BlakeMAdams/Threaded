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

	}
}