import React, { Component } from 'react';
import menuIcon from '../img/home.png';
import cartIcon from '../img/cart.svg';
import fbIcon from '../img/cart.svg';
import instIcon from '../img/cart.svg';
import { Link } from 'react-router-dom';

export default class Header extends Component {

	render() {
		return (
			<div id="header">
				<div className="header-container">
					<header>
						<nav className="flex">
							<div className="flex site-title">
								<h1><Link to="/">Threaded</Link></h1>
								<p>High Quality Clothing Tailored To You</p>
								<div className="flex main-nav">
									<Link to="/">Home</Link>
									<Link to="/about">About Threaded</Link>
									<Link to="/how-it-works">How it Works</Link>
									<Link to="/clothing">Clothing</Link>
									<Link to="/materials">Materials</Link>
									<Link to="/gallery">Gallery</Link>

								</div>
							</div>
							<div className="flex main-nav-container">
								<div className="flex">
									{/* social icons */}
									<img className="icon" src={fbIcon} alt="facebook" />
									<img className="icon" src={instIcon} alt="instagram" />
								</div>
								<div className="flex">
									<Link to="/profile">Profile</Link>
									<a href={process.env.REACT_APP_LOGIN}>Log In</a>
									<a href={process.env.REACT_APP_LOGOUT}>Log Out</a>
									<Link to="/cart">Cart<img className="icon" src={cartIcon} alt="Cart" /></Link>
								</div>
							</div>
						</nav>
					</header>
				</div >
			</div >
		)
	}

}