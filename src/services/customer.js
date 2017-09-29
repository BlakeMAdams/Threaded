import axios from 'axios';

export function getCustomerInfo() {
	
		console.log('running axios to setCustomer in getCustomerInfo/customerInfo function');
		return axios.get('/api/auth/setCustomer').then(response => {
			if (!response.country) { response.country = 'USA' }
			console.log('**IMPORTANT** getCustomerInfo response of response.data =', response.data)
			return response.data;
		})
	
}

export function getOrderHistory() {
		console.log('getOrderHistory ran')
		return axios.get('/api/getOrderHistory').then(response => {			
			return response.data;
		})
	
}