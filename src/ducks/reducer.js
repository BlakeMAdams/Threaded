import axios from 'axios';

const initialState = {
	id: '',
	first_name: '',
	last_name: '',
	email: '',
	address: '',
	city: '',
	state: '',
	country: 'USA',
	zip: '',
	phone: '',
	picture: '',
	error: ''
}

// action types
const GET_CUSTOMER_INFO='GET_CUSTOMER_INFO';

// action creators
export function getCustomerInfo() {
	const customerInfo = axios.get('/api/auth/setCustomer').then( response => { 			return response.data
	})
	return {
		type: GET_CUSTOMER_INFO,
		payload: customerInfo
	}
}

// reducer function
export default function reducer(state = initialState, action) {
	switch(action.type) {
		case GET_CUSTOMER_INFO:
			return Object.assign({}, state, { user: action.payload})
			default:
				return state;
	}
}