import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Home extends Component {
	render() {
		return (
			<div id="home">
				<Header />
				<div className="page">
					{/* <h1 className="title">Home</h1> */}
					<div className="home-subtitle">
						<h3>It's not enough that clothes look good&nbsp;on&nbsp;mannequins.</h3>
						<h2>Clothes Need to Look Good on You!</h2>
						<h3>Look Your Best In Fashion Personalized to Your&nbsp;Size, Your&nbsp;Style.</h3>
					</div>
					<img className="hero" alt="hero" src="http://img.eshakti.com/bannerimages/1200x855-1-10-17-4.jpg" />
					<div className="home-bio">
						<h2>The Threaded Story</h2>
						<p>I have struggled with buying clothes. It even got to the point I wouldn't buy myself anything. I have this odd body shape from eating yummy food and birthing children.</p>
						<p>I have been sewing for 10 yrs. I sewed for a company that sells on the Today show. I sew for my family and friends and <strong>now I want to sew for you</strong>! Together we can make clothing that fits your body and not someone else's. That's what I would be doing. <strong>A custom perfect fit</strong>. The clothing will look store bought and not homemade.</p>
						<p>Now I would love to share my skill and love for sewing and help each one of you re-new your love for perfect fitting clothing. </p>
					</div>
					<div className="home-bio">
						<h2>Our Brand Promise</h2>
						<p>1. Deliver clothing that is made just for you. It is not enough that fashion looks good on the mannequin - it needs to look good on YOU!</p>
						<p>2. Deliver new styles every month to be in line with what is trending on the street.</p>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}