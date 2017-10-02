import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';


import Header from './Header';
import Footer from './Footer';
import Garment from './Garment';
import { sendMail } from './../services/customer';
// import getCustomerInfo from './../services/getCustomerInfo';

class Bag extends Component {
	constructor() {
		super();

		this.state = {
			stripeTotal: 0
		}
		// this.sendMail = this.sendMail.bind(this);
	}

	componentWillMount() {
		// console.log("compwillmount bag: ", this.props.bag)
		function getTotal(arr) {
			var total = 0;
			for(var i = 0; i < arr.length; i++) {
				total += arr[i][2]
			}  
			return  total * 100
		}
		console.log('props.bag', this.props.bag)
		this.setState({
			stripeTotal: getTotal(this.props.bag)
		}, () => console.log("grand total from state: ", this.state.stripeTotal))

	}

	// componentDidUpdate(prevProps, prevState) {
		
	// }

	checkout(priceTotal) {

		var totalBag = {
			bag: this.props.bag,
			total: priceTotal
		}

		return axios.post('/api/checkout', totalBag)
	}
	//sendMail(totalBag)

	onToken = (token) => {
		
		token.card = void 0;
		console.log('token', token)
		console.log('in token state.stripeTotal', this.state.stripeTotal)

		axios.post('/api/payment', { token, amount: this.state.stripeTotal }).then(response => {
			alert('Thank you for your business! You have been charged $' + this.state.stripeTotal/100 + '.')
		});
	}

	render() {
		var priceTotal = 0;
		// console.log('/bag bag=', this.props.bag)
		return (
			<div id="bag" >
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
							console.log('i=', i)
							return <Garment key={i} index={i} garment={garment} />;
						}
						)}
					</section>
					<section>
						<div className='total-col'><strong>Total: &nbsp; ${priceTotal}</strong></div>
					</section>
					<section>

					</section>
					{/* <Link to="/order-complete"></Link> */}
					<section>
						<StripeCheckout
							token={this.onToken}
							stripeKey={process.env.REACT_APP_STRIPE_PUBKEY}
							amount={this.state.stripeTotal}
							name="Threaded"
							currency="USD"

						>
							<button className="btn" onClick={() => { this.checkout(priceTotal) }}>Check Out</button>
						</StripeCheckout>
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