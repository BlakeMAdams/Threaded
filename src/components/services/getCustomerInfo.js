import axios from 'axios';

export function getCustomerInfo() {
	return axios.get('/api/auth/setCustomer').then( response => response.data
	)
}