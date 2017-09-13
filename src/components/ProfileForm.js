import React, { Component } from 'react';
import './profile.css';

export default class ProfileForm extends Component {
	render() {
		return (
			<div>
				<p>{this.props.error}</p>
				<form className='react-form' >

					<fieldset className='form-group'>
						<label >First Name:</label>

						<input id='formFirstName' className='form-input' name='first_name' type='text' required onChange={this.props.handleChange} value={this.props.first_name} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Last Name:</label>

						<input id='formLastName' className='form-input' name='last_name' type='text' required onChange={this.props.handleChange} value={this.props.last_name} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Email:</label>

						<input id='formEmail' className='form-input' name='email' type='email' required onChange={this.props.handleChange} value={this.props.email} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Address:</label>

						<input id='formAddress' className='form-input' name='address' type='text' required onChange={this.props.handleChange} value={this.props.address} />
					</fieldset>

					<fieldset className='form-group'>
						<label>city:</label>

						<input id='formCity' className='form-input' name='city' type='text' required onChange={this.props.handleChange} value={this.props.city} />
					</fieldset>

					<fieldset className='form-group'>
						<label>State:</label>

						<input id='formState' className='form-input' name='state' type='text' required onChange={this.props.handleChange} value={this.props.state} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Country:</label>

						<input id='formCountry' className='form-input' name='country' type='text' required onChange={this.props.handleChange} value={this.props.country} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Zip:</label>

						<input id='formZip' className='form-input' name='zip' type='text' required onChange={this.props.handleChange} value={this.props.zip} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Phone:</label>

						<input id='formPhone' className='form-input' name='phone' type='text' required onChange={this.props.handleChange} value={this.props.phone} />
					</fieldset>



					{/* used for notes on order <fieldset className='form-group'>
							<label title='Message:' />
			
							<textarea id='formMessage' className='form-textarea' name='message' required onChange={this.props.handleChange}></textarea>
							</fieldset> */}

					<div className='form-group'>
						<button id='formButton' className='btn' onClick={() => {
							console.log('clicked');
							{/* var testObject = Object.assign({}, this.state) */ }


							this.handleSubmit()
						}}>Update Profile</button>

					</div>
				</form>
			</div>
		)
	}


}