import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';

import ProfileForm from './ProfileForm';
// import { getCustomerInfoAction } from './../ducks/reducer';
import getCustomerInfo from './../services/getCustomerInfo';



export default class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
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

		};

		//bindings
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	componentDidMount() {
		getCustomerInfo().then(
			res => {
				this.setState({
					first_name: res.first_name,
					last_name: res.last_name,
					email: res.email,
					address: res.address,
					city: res.city,
					state: res.state,

					zip: res.zip,
					phone: res.phone,
					picture: res.picture,
					error: res.error,
					logged: true
				})
				if (res.country !== 'USA' && res.country !== false) {
					this.setState({
						country: res.country
					})
				}
			}
		)

	}


	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
		console.log('change val', event.target.value);
		console.log('handleChange state=', this.state);
	};

	handleSubmit() {
		// let formData = {
		// 	formaddress: this.state.address,
		// 	formcity: this.state.city,
		// 	formstate: this.state.state,
		// 	formcountry: this.state.country,
		// 	formzip: this.state.zip,
		// 	formphone: this.state.phone
		// }

		// if (formData.formaddress.length < 1 || formData.formcity.length < 1 || formData.formstate.length < 1 || formData.formcountry.length < 1 || formData.formzip.length < 1 || formData.formphone.length < 1) {
		// 	this.setState({
		// 		error: 'Please fill in all fields'
		// 	})
		// } else {
		// console.log('posted');

		// var person = {
		// 	id: this.state.id,
		// 	first_name: this.state.first_name,
		// 	last_name: this.state.last_name,
		// 	email: this.state.email,
		// 	address: this.state.address,
		// 	city: this.state.city,
		// 	state: this.state.state,

		// 	zip: this.state.zip,
		// 	phone: this.state.phone

		// }
		// console.log(person)

		return axios.post('/api/updateCustomer', this.state).then(res => {
			console.log('response from updateCustomer post', res)

		})


	}

	render() {
		return (
			<div id="profile">
				<Header />
				<div className="page">
					<h1 className="title">Profile</h1>
					<h4>Please make sure all your information is complete in order to make a purchase.</h4>
					{/* ID = {this.state.id} <br />
					First name = {this.state.first_name}<br />
					Last name = {this.state.last_name}<br />
					Email = {this.state.email} */}
					<br />


					<ProfileForm
						state={this.state}
						first_name={this.state.first_name}
						last_name={this.state.last_name}
						email={this.state.email}
						address={this.state.address}
						city={this.state.city}
						state={this.state.state}
						country={this.state.country}
						zip={this.state.zip}
						phone={this.state.phone}
						picture={this.state.picture}
						error={this.state.error}
						handleChange={(e) => this.handleChange(e)}
						handleSubmit={this.handleSubmit}
					/>
					<button id='formButton' className='btn' onClick={() => {
						{/* console.log('clicked'); */ }
						this.handleSubmit()
					}}>Update Profile</button>


				</div>
				<Footer />
			</div>
		)
	}

}
// function mapStateToProps(state) {
// 	console.log('Profile.js state', state)
// 	return {
// 		customer: state.customer
// 	}
// }

// let outputActions = {
// 	getCustomerInfoAction: getCustomerInfoAction
// }

// export default connect(mapStateToProps, outputActions)(Profile);