import React, { Component } from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';


// import { getCustomerInfoAction } from './../ducks/reducer';
// import { handleSubmit } from './../ducks/reducer';
// import { handleChange } from './../ducks/reducer';


export default class ProfileForm extends Component {
	constructor(props) {
		super(props);
		// this.handleSubmit = this.handleSubmit.bind(this);

		// this.state = { customer: props.state }
	}
	componentDidMount() {
		console.log('profileform this.props =', this.props);
	}
	
	

	render() {
		return (
			<div id="profile-form">
				<p>{this.props.error}</p>

				
				{/* <form className='react-form' action={axios.post('/api/updateCustomer', this.state)} method="post"> */}
				<form className='react-form'>

					<fieldset className='form-group'>
						<label >First Name:</label>

						<input id='formFirstName' className='form-input' name='first_name' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.first_name} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Last Name:</label>

						<input id='formLastName' className='form-input' name='last_name' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.last_name} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Email:</label>

						<input id='formEmail' className='form-input' name='email' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.email} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Address:</label>

						<input id='formAddress' className='form-input' name='address' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.address} />
					</fieldset>

					<fieldset className='form-group'>
						<label>city:</label>

						<input id='formCity' className='form-input' name='city' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.city} />
					</fieldset>

					<fieldset className='form-group'>
						<label>State:</label>

						<input id='formState' className='form-input' name='state' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.state} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Country:</label>

						<input id='formCountry' className='form-input' name='country' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.country} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Zip:</label>

						<input id='formZip' className='form-input' name='zip' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.zip} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Phone:</label>

						<input id='formPhone' className='form-input' name='phone' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.phone} />
					</fieldset>



					{/* used for notes on order <fieldset className='form-group'>
							<label title='Message:' />
			
							<textarea id='formMessage' className='form-textarea' name='message' required onChange={this.props.handleChange}></textarea>
							</fieldset> */}

					{/* THIS FORM DOES NOT UPDATE CORRECTLY, USING THE BUTTON IN ITS PARENT> Profile.js 
					<div className='form-group'>
						<button id='formButton' className='btn' onClick={() => {
							this.props.handleSubmit()
						}}>Update Profile</button>

					</div> */}
				</form>
			</div>
		)
	}


}
// function mapStateToProps(state) {
// 	console.log('mapStateToProps state.customer' + JSON.stringify(state.customer))
// 	return {
// 		customer: state.customer
// 	}
// }

// let outputActions = {
// 	getCustomerInfoAction,
// 	handleChange
// }

// export default connect(mapStateToProps, outputActions)(ProfileForm);