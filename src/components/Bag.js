import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';

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
						
					</div>
				{.map((e, i) => {

					return (
						<div key={i} className='clothing-item-display'>
							<img className='clothing-item-display-img' src={e.image} alt='e.name' />
							<div className='clothing-item-details'>
								<h3>{e.name}</h3>
								<h4>${e.price}</h4>
								<p>{e.description}</p>

							</div>
						</div>)
				})}
				</section>


				</div>
				<Footer />
			</div>
		)
	}
}
function mapStateToProps(state){
	return { bag : state.bag }
}
export default connect(mapStateToProps)(Bag)