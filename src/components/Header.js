import React, { Component } from 'react';
import menuIcon from '../img/home.png';
import cartImage from '../img/search.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {

	render() {
		return (
			<div id="header">
				<div className="header-container">
					<header>
						<nav>
							<div>
								<Link to="/how-it-works">How it Works</Link>
								<Link to="/about">About Threaded</Link>
							</div>
							<div>
								<h1>Threaded</h1>
							</div>
							<div>
								<a href={process.env.REACT_APP_LOGIN}>Sign In</a>
								<br/>
								<Link to="/cart">Cart <img src={cartImage} alt="Cart" /></Link>
							</div>
						</nav>
						<br/>
						<nav>

						</nav>
						
					</header>
				</div >
			</div >
		)
	}

}