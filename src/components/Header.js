import React, { Component } from 'react';
import menuIcon from '../img/home.png';
import cartImage from '../img/cart.svg';
import { Link } from 'react-router-dom';

export default class Header extends Component {

	render() {
		return (
			<div id="header">
				<div className="header-container">
					<header>
						<nav className="flex">
							<div className="flex">
								<Link to="/how-it-works">How it Works</Link> &nbsp; 
								<Link to="/about">About Threaded</Link>

							</div>
							<div className="flex">
								<h1><Link to="/">Threaded</Link></h1>
							</div>
							<div className="flex">
								<Link to="/profile">Profile</Link>  &nbsp; 
								<a href={process.env.REACT_APP_LOGIN}>Log In</a> &nbsp; 
								<a href={process.env.REACT_APP_LOGOUT}>Log Out</a> &nbsp; 
								<Link to="/cart">Cart<img src={cartImage} alt="Cart" /></Link>
							</div>
						</nav>
						<br />
						<nav>

						</nav>

					</header>
				</div >
			</div >
		)
	}

}