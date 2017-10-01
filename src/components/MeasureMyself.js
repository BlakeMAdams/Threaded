import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

export default class MeasureMyself extends Component {
	render() {
		return (
			<div id="MeasureMyself">
				<Header />
				<div className="page">
				<h1 className="title">How To Measure Yourself</h1>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/B_hsEUpHFEA?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
				</div>
				<Footer />
			</div>
		)
	}
}