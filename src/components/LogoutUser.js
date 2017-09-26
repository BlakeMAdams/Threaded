import React, { Component } from 'react';
function LogoutUser(props) {
  return (
    <a href={process.env.REACT_APP_LOGOUT}><button onClick={props.onClick}>
      Logout
    </button></a>
  );
}
export default LogoutUser;