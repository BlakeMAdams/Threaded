import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Admin extends Component {
	render() {
		return (
			<div id="admin">
				<Header />
				<div className="page">
				Admin
				</div>
				<Footer />
			</div>
		)
	}
}