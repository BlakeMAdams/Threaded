import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

import { Link } from 'react-router-dom';

export default class Howitworks extends Component {
	render() {
		return (
			<div id="Howitworks">
				<Header />
				<div className="page">
					<h1 className="title">How It Works</h1>
					<div>
						<div className="container_6">
							{/* <!--main container starts here--> */}
							<div className="">
								<h2 className="hiw-title">How it works</h2>
							</div>
							<div className="hiw-explain">
								{/* <!--First Row starts--> */}
								<h2 className="hiw-title"><span>1.</span> Pick your favorite design</h2>
								<span className="hiwitalics">Choose one of our dresses, tops, or bottoms in our design collection.</span>
								<Link to="/clothing">SHOP STYLES NOW</Link>
							</div>
							<div className="hiwimg">
								<img src="images/how_it_works_03n.jpg" alt="Shop now" />
							</div>
							<div className="clear"></div>
							{/* <!--First Row Ends--> */}

							<div className="nhiwimg">
								{/* <!--Second Row starts--> */}
								<img src="images/how_it_works_07.jpg" alt="Measure" />
							</div>
							<div className="hiw-explain">
								<h2 className="hiw-title"><span>2.</span> Tell us your measurements</h2>
								<span className="hiwitalics">Whether you choose to customize your item or not, we’ll always need to know at least your height to give you a great fit. </span>
								
								<Link to="/measurements">SEE OUR SIZE &amp; FITTING GUIDE</Link>
							</div>
							<div className="mhiwimg">
								<img src="images/how_it_works_07.jpg" alt="Measure" />
							</div>
							<div className="clear"></div>
							{/* <!--Second Row ends--> */}

							<div className="hiw-explain">
								{/* <!--Third Row starts--> */}
								<h2 className="hiw-title"><span>3.</span> Customize your design to suit your style -- if you like!</h2>
								<span className="hiwitalics">Want a higher hemline? A lower neckline? Different sleeves? No problem.
							<br />
									We customize designs to get you the look you want.</span>
								<a href={process.env.REACT_APP_LOGIN} className="signin-popup">JOIN Threaded</a>
							</div>
							<div className="hiwimg">
								<img src="images/how_it_works_11.jpg" alt="Ship" />
							</div>
							<div className="clear"></div>
							{/* <!--third Row ends--> */}


							{/* <!--full width Row starts--> */}

							{/* <!--Title Row starts--> */}

							{/* <!--Title Row ends--> */}
							<div className="nhiwimg">
								<img src="images/how_it_works_25.jpg" alt="Shop now" />
							</div>
							<div className="hiw-explain">
								{/* <!--Fourth Row starts--> */}
								<h2 className="hiw-title"><span>4.</span> Get ready for your customized clothing</h2>
								<span className="hiwitalics">Your item will be hand-crafted to order and at your doorstep in 14-18 days.</span>
								
							</div>
							<div className="mhiwimg">
								<img src="images/how_it_works_25.jpg" alt="Shop now" />
							</div>
							<div className="clear"></div>
							{/* <!--Fourth Row ends--> */}


							<div className="hiw-explain">
								<h2 className="hiw-title"><span>5.</span> Enjoy the fabulous fit of your one-of-a kind piece</h2>
								<span className="hiwitalics">We hope you’ll enjoy your custom design. If you have any issues with your order at all, just let us know and we’ll work with you to fix it.</span>
								
							</div>
							
							<div className="nhiwimg">
								{/* <!--Sixth Row starts--> */}
								<img src="http://www.eshakti.com/images/how-it-works6.jpg" alt="Shop now" />
							</div>
							
							
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}