import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Gallery extends Component {
	render() {
		return (
			<div id="gallery">
				<Header />
				<div className="page">
				<h1 className="title">Gallery</h1>
				</div>
				<Footer />
			</div>
		)
	}
}