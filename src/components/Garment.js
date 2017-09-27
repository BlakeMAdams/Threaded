import React, { Component } from 'react';

export default class Garment extends Component {

	checkMapMeasurements(garment) {
		console.log('checkMeasure ran')
		console.log('propsdefaultmeasurement', this.props.defaultMeasurement)
		if (garment[4] == 'no default measurement') {
			var measurements = garment[5];
			var measure = [];
			for (var key in measurements) {
				if (measurements[key] ) {
					console.log('checkmeasurements', key, measurements[key])
					measure.push(<p>{key} : {measurements[key]}</p>)

				}
			}
			return measure;
		}
	}
	
	render(){
		return (
			<div className="bag-item-row">
			<div className="product-col">
				<div className='clothing-item-display'>
					<img className='clothing-item-display-img' src='' alt='' />
					<div className='clothing-item-details'>
						
						<h4>{this.props.garment[1]}</h4>
						<p>{this.props.garment[3]}</p>
						<h4>Measurements</h4>
						{this.checkMapMeasurements(this.props.garment)}
					</div>
				</div>
			</div>
			<div className="price-col">{this.props.garment[2]}</div>
			<div className="remove-col"><img src='' alt='' /></div>
		
		
		</div>
		)

	}
	
}