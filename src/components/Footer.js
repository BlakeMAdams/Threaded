import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {

	render() {
		return (
			<div id="footer">
				<div className="footer-container">
					<footer>
						<h3>Footer</h3>
						<nav>Copyright Blake Adams 2017
						</nav>
					</footer>
				</div>
			</div>
		)
	}
}