import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

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
							<div className="grid_6 ">
								<h2 className="hiw-title">How it works</h2>
							</div>
							<div className="grid_3 hiw-explain">
								{/* <!--First Row starts--> */}
								<h2 className="hiw-title"><span>1.</span> Pick your favorite design</h2>
								<span className="hiwitalics">Choose one (or many) of the dresses, tops, and bottoms in the eShakti collection.</span>
								<a href="ProductList.aspx?category=Dresses">SHOP STYLES NOW</a>
							</div>
							<div className="grid_3 hiwimg">
								<img src="images/how_it_works_03n.jpg" alt="Shop now" />
							</div>
							<div className="clear"></div>
							{/* <!--First Row Ends--> */}

							<div className="grid_3 nhiwimg">
								{/* <!--Second Row starts--> */}
								<img src="images/how_it_works_07.jpg" alt="Measure" />
							</div>
							<div className="grid_3 hiw-explain">
								<h2 className="hiw-title"><span>2.</span> Tell us your measurements</h2>
								<span className="hiwitalics">Whether you choose to customize your item or not, we’ll always need to know at least your height to give you a great fit. </span>
								<a href="SizeChart.aspx">SEE OUR SIZE &amp; FITTING GUIDE</a>
							</div>
							<div className="grid_3 mhiwimg">
								<img src="images/how_it_works_07.jpg" alt="Measure" />
							</div>
							<div className="clear"></div>
							{/* <!--Second Row ends--> */}

							<div className="grid_3 hiw-explain">
								{/* <!--Third Row starts--> */}
								<h2 className="hiw-title"><span>3.</span> Customize your design to suit your style -- if you like!</h2>
								<span className="hiwitalics">Want a higher hemline? A lower neckline? Different sleeves? No problem.
							<br />
									We customize designs for sizes 0-36W for just $9.95 per item.</span>
								<a href="#signinform" className="signin-popup" onclick="SigninPopupOpen();">JOIN eSHAKTI</a>
							</div>
							<div className="grid_3 hiwimg">
								<img src="images/how_it_works_11.jpg" alt="Ship" />
							</div>
							<div className="clear"></div>
							{/* <!--third Row ends--> */}


							{/* <!--full width Row starts--> */}

							{/* <!--Title Row starts--> */}

							{/* <!--Title Row ends--> */}
							<div className="grid_3 nhiwimg">
								<img src="images/how_it_works_25.jpg" alt="Shop now" />
							</div>
							<div className="grid_3 hiw-explain">
								{/* <!--Fourth Row starts--> */}
								<h2 className="hiw-title"><span>4.</span> Get ready for your customized clothing</h2>
								<span className="hiwitalics">Your item will be hand-crafted to order and at your doorstep in 10-14 days.</span>
								<a href="ShippingPolicy.aspx">SEE SHIPPING INFO</a>
							</div>
							<div className="grid_3 mhiwimg">
								<img src="images/how_it_works_25.jpg" alt="Shop now" />
							</div>
							<div className="clear"></div>
							{/* <!--Fourth Row ends--> */}


							<div className="grid_3 hiw-explain">
								<h2 className="hiw-title"><span>5.</span> Enjoy the fabulous fit of your one-of-a kind piece</h2>
								<span className="hiwitalics">We hope you’ll enjoy your custom design. If you have any issues with your order at all, just let us know and we’ll work with you to fix it.</span>
								<a href="ReturnsPolicy.aspx">SEE OUR RETURNS POLICY</a>
							</div>
							<div className="grid_3 nhiwimg">
								{/* <!--Fifth Row starts--> */}
								<img src="images/how_it_works_28.jpg" alt="Shop now" />
							</div>
							<div className="grid_3 mhiwimg">
								<img src="images/how_it_works_28.jpg" alt="Shop now" />
							</div>
							<div className="clear"></div>
							<div className="grid_3 nhiwimg">
								{/* <!--Sixth Row starts--> */}
								<img src="http://www.eshakti.com/images/how-it-works6.jpg" alt="Shop now" />
							</div>
							<div className="grid_3 hiw-explain">
								<h2 className="hiw-title"><span>6.</span> SEE WHAT OUR CUSTOMERS SAY</h2>
								<span className="hiwitalics">We consistently receive and greatly appreciate incredible feedback from customers on our products and our quality.</span>
								<a href="/CustomerSpeak.aspx">TAKE A LOOK AT RECENT FEEDBACK</a>
							</div>
							<div className="grid_3 mhiwimg">
								{/* <!--Sixth Row starts--> */}
								<img src="http://www.eshakti.com/images/how-it-works6.jpg" alt="Shop now" />
							</div>
							{/* <div class="clear"></div><!--Sixth Row ends--> */}
							{/* <!--Fourth Row ends--> */}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}