import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import fbIcon from '../img/cart.svg';
import instIcon from '../img/cart.svg';

export default class Footer extends Component {

	render() {
		return (
			<div id="footer">
				<div className="footer-container">
					<footer className="flex">
						<p>Blake Adams &copy;2017</p>
						<div className="flex">
							{/* social icons */}
							<img className="icon" src={fbIcon} alt="facebook" />
							<img className="icon" src={instIcon} alt="instagram" />
						</div>
					</footer>
				</div>
			</div>
		)
	}
}