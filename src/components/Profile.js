import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

import {getCustomerInfo} from './services/getCustomerInfo';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '', //remember to turn this back into a number when using it
			first_name: '',
			last_name: '',
			email: '',
			address: '',
			city: '',
			state: '',
			country: '',
			zip: '',
			phone: '',
			picture: ''
		}

	}
		componentDidMount() {
			getCustomerInfo().then((res) =>{
				console.log(res);
				this.setState ({
				 	id: res.id,
					first_name: res.first_name,
					last_name: res.last_name,
					email: res.email,
					address: res.address,
					city: res.city,
					state: res.state,
					country: res.country,
					zip: res.zip,
					phone: res.phone,
					picture: res.picture
				})

				// console.log(this.state);

			})
		}
	

	render() {
		return (
			<div id="profile">
				<Header />
				<div className="page">
					<h1>Profile</h1>
				<h4>Please make sure all your information is complete in order to make a purchase.</h4>
				ID = {this.state.id} <br/>
				First name = {this.state.first_name}<br/>
				Last name = {this.state.last_name}<br/>
				Email = {this.state.email}
				
				</div>
				<Footer />
			</div>
		)
	}
}