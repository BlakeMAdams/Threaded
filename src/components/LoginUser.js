import React, { Component } from 'react';

function LoginUser(props) {
	return (
	  <a href={process.env.REACT_APP_LOGIN}><button onClick={props.onClick}>
		Login
	  </button></a>
	);
  }
  export default LoginUser;