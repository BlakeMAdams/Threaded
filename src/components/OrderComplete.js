import React, { Component } from 'react';
	     
import Header from './Header';
import Footer from './Footer';

export default class OrderComplete extends Component {
	render() {
		return (
			<div id="ordercomplete">
				<Header />
				<div className="page">
					<h1 className="title">Thank You!</h1>
					<p>Your order has been successfully placed.</p>
				</div>
				<Footer />
			</div>
		)
	}
}