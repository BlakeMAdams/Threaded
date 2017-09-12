import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

export default class About extends Component {
	render() {
		return (
			<div id="about">
				<Header />
				<div className="page">
				About
				</div>
				<Footer />
			</div>
		)
	}
}