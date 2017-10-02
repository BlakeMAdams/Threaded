import axios from 'axios';

export function getCustomerInfo() {

	console.log('getCustomerInfo -> axios to setCustomer ran');
	return axios.get('/api/auth/setCustomer').then(response => {
		if (!response.country) { response.country = 'USA' }
		console.log('getCustomerInfo response of response.data =', response.data)
		return response.data;
	})

}

export function getOrderHistory() {
	console.log('getOrderHistory ran')
	return axios.get('/api/getOrderHistory').then(response => {
		return response.data;
	})

}

export function sendMail(bag) {
	console.log('sendMail ran', bag)
	return axios.post('http://localhost:3050/api/sendMail', bag).then(response => {
		return response;
	})
	
}

// export function checkLogged() {
// 	if (!this.state.logged) {
// 		console.log('checklogged ran')
// 		return axios.get('/api/auth/login').then(response => {
// 			return response.data;
// 		})
// 	}
// }