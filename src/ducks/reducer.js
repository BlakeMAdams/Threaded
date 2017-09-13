import axios from 'axios';


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

// action creators
export function getCustomerInfo() {
	const customerInfo = axios.get('/api/auth/setCustomer').then(response => {
		if (!response.country) { response.country = 'USA' }

		return response.data
	})

	return {
		type: GET_CUSTOMER_INFO,
		payload: customerInfo
	}
}
export function handleChange(e) {
	let newState = {};
	newState[e.target.name] = e.target.value;

	this.setState(newState);
};

export function handleSubmit() {
	let formData = {
		formaddress: this.state.address,
		formcity: this.state.city,
		formstate: this.state.state,
		formcountry: this.state.country,
		formzip: this.state.zip,
		formphone: this.state.phone
	}

	if (formData.formaddress.length < 1 || formData.formcity.length < 1 || formData.formstate.length < 1 || formData.formcountry.length < 1 || formData.formzip.length < 1 || formData.formphone.length < 1) {
		this.setState({
			error: 'Please fill in all fields'
		})
	} else {
		console.log('posted');
		axios.post('/api/updateCustomer', this.state)



	}

}

// reducer function
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_CUSTOMER_INFO:
			return Object.assign({}, state, { customer: action.payload })

		default:
			return state;
	}
}