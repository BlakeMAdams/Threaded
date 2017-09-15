import axios from 'axios';
import getCustomerInfo from './../services/getCustomerInfo';


const initialState = {
	customer: {
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
}

// action types
const GET_CUSTOMER_INFO = 'GET_CUSTOMER_INFO';
const HANDLE_CHANGE = 'HANDLE_CHANGE';
const HANDLE_SUBMIT = 'HANDLE_SUBMIT';

// action creators
// export function getCustomerInfoAction() {
// 	console.log('reducer getCustomerInfo triggered');
	
// 	getCustomerInfo().then(res => res)
	
// 	console.log('axios getcustomer in reducer =', res )
	
// 	return {
// 		type: GET_CUSTOMER_INFO,
// 		payload: responseData
// 	}
// }
// export function handleChange(e) {
// 	let newState = {};
// 	newState[e.target.name] = e.target.value; 

// 	return {
// 		type: HANDLE_CHANGE,
// 		payload: newState
// 	}
// 	// this.setState(newState);
// };

// export function handleSubmit() {
// 	let formData = {
// 		formaddress: this.state.customer.address,
// 		formcity: this.state.customer.city,
// 		formstate: this.state.customer.state,
// 		formcountry: this.state.customer.country,
// 		formzip: this.state.customer.zip,
// 		formphone: this.state.customer.phone
// 	}

// 	var fullForm = () => {
// 		if (formData.formaddress.length < 1 || formData.formcity.length < 1 || formData.formstate.length < 1 || formData.formcountry.length < 1 || formData.formzip.length < 1 || formData.formphone.length < 1) {
// 			// return { error: 'Please fill in all fields'};
// 		} else {
// 			console.log('posted');
// 			axios.post('/api/updateCustomer', this.state);
// 		}
// 	}
// 	return {
// 		type: HANDLE_SUBMIT,
// 		payload: fullForm
// 	}

// }

// reducer function
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_CUSTOMER_INFO':
			console.log('reducer function case getCustomer triggered to update state');
			return Object.assign({}, state, { customer: action.payload })

		case 'HANDLE_CHANGE':
			return Object.assign({}, state, { customer: action.payload })

		case 'HANDLE_SUBMIT':
			return Object.assign({}, state, { customer: action.payload })

		default:
			return state;
	}
}