import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Clothing extends Component {
	render() {
		return (
			<div id="clothing">
				<Header />
				<div className="page">
				Clothing
				</div>
				<Footer />
			</div>
		)
	}
}