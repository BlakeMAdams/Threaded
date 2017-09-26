import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

export default class MeasureMyself extends Component {
	render() {
		return (
			<div id="MeasureMyself">
				<Header />
				<div className="page">
				<h1 className="title">Measure Myself</h1>
				</div>
				<Footer />
			</div>
		)
	}
}