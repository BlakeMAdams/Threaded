import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Gallery extends Component {
	render() {
		return (
			<div id="gallery">
				<Header />
				<div className="page">
				Gallery
				</div>
				<Footer />
			</div>
		)
	}
}