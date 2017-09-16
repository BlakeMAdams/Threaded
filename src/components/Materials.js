import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Materials extends Component {
	render() {
		return (
			<div id="materials">
				<Header />
				<div className="page">
				<h1 className="title">Materials</h1>
				</div>
				<Footer />
			</div>
		)
	}
}