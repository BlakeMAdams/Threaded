import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';

import ProfileForm from './ProfileForm';
import { getCustomerInfo } from './../ducks/reducer';
import { connect } from 'react-redux';


class Profile extends Component {
	constructor(props) {
		super(props);

	}
	componentDidMount() {
		
	}

	render() {
		return (
			<div id="profile">
				<Header />
				<div className="page">
					<h1>Profile</h1>
					<h4>Please make sure all your information is complete in order to make a purchase.</h4>
					{/* ID = {this.state.id} <br />
					First name = {this.state.first_name}<br />
					Last name = {this.state.last_name}<br />
					Email = {this.state.email} */}
					<br/>

					<ProfileForm />
					

				</div>
				<Footer />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		customer: state.customer
	}
}

let outputActions = {
	getCustomerInfo: getCustomerInfo
}

export default connect(mapStateToProps, outputActions)(Profile);