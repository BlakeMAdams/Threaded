import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
// import Garment from './Garment';
import { removeGarment } from './../ducks/reducer';

class Bag extends Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	bagProps: this.props.bag
		// }
	}

	// componentWillReceiveProps(nextProps) {
	// 	this.setState({
	// 		bagProps: nextProps.bag
	// 	})
	// }

	checkMapMeasurements(garment) {

		// console.log('propsdefaultmeasurement', this.props.defaultMeasurement)
		if (garment[4] === 'no default measurement') {
			var measurements = garment[5];
			var measure = [];
			for (var key in measurements) {
				if (measurements[key]) {
					// console.log('checkmeasurements', key, measurements[key])
					measure.push(<p key={key}>{key} : {measurements[key]}</p>)

				}
			}
			return measure;
		}
	}

	renderItems() {
		// console.log('renderItems ran')
		return this.props.bag.map((garment, i) => {
			return (
				<div key={i} className="bag-item-row">
					<div className="product-col">
						<div className='clothing-item-display'>
							<img className='clothing-item-display-img' src='' alt='' />
							<div className='clothing-item-details'>
								{/* {console.log('garment',garment)}
								{console.log('garments index=', i)} */}
								<h4>{garment[1]}</h4>
								<p>{garment[3]}</p>
								<h4>Measurements</h4>
								{this.checkMapMeasurements(garment)}
							</div>
						</div>
					</div>
					<div className="price-col">{garment[2]}</div>
					{/* {console.log('/bag bag before slice', this.props.bag)} */}
					<div className="remove-col"><button value={i} onClick={(e) => {  this.props.removeGarment(e.target.value) }}>Remove Item <img src='' alt='' /></button>
					</div>
				</div>
			)
		})
	}

	render() {

		// console.log('/bag bag=', this.props.bag)
		return (
			<div id="bag">
				<Header />
				<div className="page">
					<h1 className="title">Bag</h1>

					<section>
						<div className="bag-column-headings">
							<div className="product-col">Product Information</div>
							<div className="price-col">Price</div>
							<div className="remove-col">Remove</div>
						</div>


						{this.renderItems()}

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
let outputActions = {
	removeGarment
}
export default connect(mapStateToProps, outputActions)(Bag)