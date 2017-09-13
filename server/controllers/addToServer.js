module.exports = {
	updateCustomer: (req, res, next) => {
		console.log('updateCustomer ran. req.body = ', req.body)
		const { first_name, last_name, email, address, city, state, country, zip, phone } = req.body;
		var id = req.user.id;
		var countrytest = req.user.country;
		req.user = { id, first_name, last_name, email, address, city, state, country, zip, phone };
		console.log('country = ' + countrytest);
		const dbInstance = req.app.get('db');
		dbInstance.updateCustomerSQL( id, first_name, last_name, email, address, city, state, country, zip, phone )
		.then(customer => res.status(200).send(customer))
		.catch(err => {
			console.log(err)
			res.status(500).send()
		});
		
	}
}