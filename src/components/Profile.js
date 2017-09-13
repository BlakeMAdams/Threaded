import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';

import ProfileForm from './ProfileForm';
import { getCustomerInfo } from './services/getCustomerInfo';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	id: '', //remember to turn this back into a number when using it
		// 	first_name: '',
		// 	last_name: '',
		// 	email: '',
		// 	address: '',
		// 	city: '',
		// 	state: '',
		// 	country: 'USA',
		// 	zip: '',
		// 	phone: '',
		// 	picture: '',
		// 	error: ''
		// }

		//bindings
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}
	componentDidMount() {
		getCustomerInfo().then((res) =>{
			console.log('Profile/getCustomerInfo triggered', res);
			
			this.setState ({
				id: res.id,
				first_name: res.first_name,
				last_name: res.last_name,
				email: res.email,
				address: res.address,
				city: res.city,
				state: res.state,
				zip: res.zip,
				phone: res.phone,
				picture: res.picture
				
			})
			if(res.country !== 'USA' && res.country !== false) { this.setState ({
				country: res.country
			})}

			// console.log(this.state);

		})
	}

	

	handleChange = (e) => {
		let newState = {};
		newState[e.target.name] = e.target.value;

		this.setState(newState);
	};

	handleSubmit = () =>{
		let formData = {
			formaddress: this.state.address,
			formcity: this.state.city,
			formstate: this.state.state,
			formcountry: this.state.country,
			formzip: this.state.zip,
			formphone: this.state.phone
		}
		
		if (formData.formaddress.length < 1 || formData.formcity.length < 1 || formData.formstate.length < 1 || formData.formcountry.length < 1 || formData.formzip.length < 1  || formData.formphone.length < 1  ) {
			 this.setState({
					error: 'Please fill in all fields'
				}) 
		} else { console.log('posted');
			axios.post('/api/updateCustomer', this.state)


			
		}

	}


	render() {
		return (
			<div id="profile">
				<Header />
				<div className="page">
					<h1>Profile</h1>
					<h4>Please make sure all your information is complete in order to make a purchase.</h4>
					ID = {this.state.id} <br />
					First name = {this.state.first_name}<br />
					Last name = {this.state.last_name}<br />
					Email = {this.state.email}
					<br/>

					<ProfileForm 
						first_name={this.first_name} 
						last_name={this.last_name}
						email={this.email}
						address={this.address}
						city={this.city}
						state={this.state}
						country={this.country}
						zip={this.zip}
						phone={this.phone}
						error={this.error}
						/>


				</div>
				<Footer />
			</div>
		)
	}
}