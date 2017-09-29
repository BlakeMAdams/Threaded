import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';
import Garment from './Garment';
// import getCustomerInfo from './../services/getCustomerInfo';

class Bag extends Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	customer: {
		// 		first_name: '',
		// 		last_name: '',
		// 		email: '',
		// 		address: '',
		// 		city: '',
		// 		state: '',
		// 		country: '',
		// 		zip: '',
		// 		phone: ''
		// 	}
		// }
	}

	componentDidMount() {
		// getCustomerInfo().then(
		// 	res => {
		// 		this.setState({
		// 			customer: {
		// 				first_name: res.first_name,
		// 				last_name: res.last_name,
		// 				email: res.email,
		// 				address: res.address,
		// 				city: res.city,
		// 				state: res.state,
		// 				zip: res.zip,
		// 				phone: res.phone
		// 			}
		// 		})
		// 	}
		// )
	}

	checkout(priceTotal) {
		console.log('bag',this.props.bag)	
		var moreBag = [];
		for(let i = 0; i < this.props.bag.length; i++) {
			let newBag = this.props.bag[i].slice(0,6);
			newBag.push('/END');
			moreBag.push(newBag);

		}
		var totalBag = { 
			bag: moreBag, 
			total: priceTotal }
		console.log('totalBag',totalBag);
		return axios.post('/api/checkout', totalBag).then(res => {
			// console.log('post checkout res', res.data)
		})
	}

	render() {
				var priceTotal = 0;
				// console.log('/bag bag=', this.props.bag)
				return(
			<div id= "bag" >
			<Header />
			<div className="page">
				<h1 className="title">Bag</h1>

				<section>
					<div className="bag-column-headings">
						<div className="product-col"><strong>Product Information</strong></div>
						<div className="price-col"><strong>Price</strong></div>
						<div className="remove-col"><strong>Remove</strong></div>
					</div>
					{this.props.bag.map((garment, i) => {
						priceTotal += (garment[2])
						return <Garment key={i} index={i} garment={garment} />;
					}
					)}
				</section>
				<section>
					<div className='total-col'><strong>Total: &nbsp; ${priceTotal}</strong></div>
				</section>
				<section>
					<button onClick={() => this.checkout(priceTotal)}>Check Out</button>
				</section>
			</div>
			<Footer />
			</div >
		)
	}
}

function mapStateToProps(state) {
	return { bag: state.bag }
}
export default connect(mapStateToProps)(Bag)