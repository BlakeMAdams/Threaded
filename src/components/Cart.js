import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Cart extends Component {
	render() {
		return (
			<div id="cart">
				<Header />
				<div className="page">
				Cart
				</div>
				<Footer />
			</div>
		)
	}
}