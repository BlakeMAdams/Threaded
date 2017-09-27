import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import Garment from './Garment';

class Bag extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="bag">
				<Header />
				<div className="page">
					<h1 className="title">Bag</h1>
					{console.log('/bag bag=', this.props.bag)}
					<section>
						<div className="bag-column-headings">
							<div className="product-col">Product Information</div>
							<div className="price-col">Price</div>
							<div className="remove-col">Remove</div>
						</div>
						{this.props.bag.map((garment, i)  => <Garment key={i} garment={garment} />)}
					</section>
					<section>
						
					</section>
				</div>
				<Footer />
			</div>
		)
	}
}
function mapStateToProps(state) {
	return { bag: state.bag }
}
export default connect(mapStateToProps)(Bag)