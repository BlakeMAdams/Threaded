import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import { getGallery } from './../services/clothingService';

export default class Gallery extends Component {

	constructor(props) {
		super(props);

		this.state = {
			gallery: []
		}
	}
	componentDidMount() {
		getGallery().then(response => {
			this.setState({
				gallery: response
			})
			console.log('gallery',response)
		})
	}

	render() {
		return (
			<div id="gallery">
				<Header />
				<div className="page">
					<h1 className="title">Gallery</h1>
					<div className='gallery'>
						{this.state.gallery.map((e, i) => {
							return (
								<div key={i} className='gallery-items'>
									<img className="gallery-images" src={e.image} alt={e.name} />
									
									<p>{e.name}</p>
									<p>{e.mat_name}</p>
									
								</div>
							)
						})
						}
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}