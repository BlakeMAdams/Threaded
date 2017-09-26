import React, { Component } from 'react';
import LoginUser from './LoginUser';
import LogoutUser from './LogoutUser';

export default class LoginControl extends Component {
	
	constructor(props) {
	  super(props);
	  this.handleLoginClick = this.handleLoginClick.bind(this);
	  this.handleLogoutClick = this.handleLogoutClick.bind(this);
	  this.state = {isLoggedIn: false};
	}
	handleLoginClick() {
	  this.setState({isLoggedIn: true});
	  process.env.REACT_APP_LOGIN
	}
	handleLogoutClick() {
	  this.setState({isLoggedIn: false});
	  process.env.REACT_APP_LOGOUT
	}
	render() {
	  const isLoggedInStatus = this.state.isLoggedIn;
	  let button = null;
	  if (isLoggedInStatus) {
		button = <LogoutUser onClick={this.handleLogoutClick} />;
	  } else {
		button = <LoginUser onClick={this.handleLoginClick} />;
	  }
	  return (
		<div>
		  {button}
		</div>
	  );
	}
  }