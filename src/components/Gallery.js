import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import { getGallery, getClothing, getMaterials } from './../services/clothingService';

export default class Gallery extends Component {

	constructor(props) {
		super(props);

		this.state = {
			gallery: [],
			clothing: [],
			clothingCategory: 'SELECT',
			clothingSubCategory: 'SELECT',
			materials: [],
			material: 'SELECT',
			galleryFilter: {}
		}
		this.handleChange = this.handleChange.bind(this);
		this.galleryDisplay = this.galleryDisplay.bind(this);
	}
	componentDidMount() {
		getGallery().then(response => {
			this.setState({
				gallery: response
			})
			console.log('gallery', response)
		})
		getMaterials().then(response => {
			this.setState({ materials: response })
			console.log('state materials:', this.state.materials);
		})
		getClothing().then(response => {
			this.setState({ clothing: response })
			console.log('state clothing:', this.state.clothing);
		})
	}

	handleChange(name, value) {
		console.log('change name', name);
		console.log('change val', value);
		
		this.setState({ [name]: value }, () => console.log('state',this.state));
		this.galleryDisplay();

	}

	subCatTrue() {
		return this.state.clothing.map((e, i) => <option value={e.name}>{e.name}</option>)
	}

	subCatFalse() {
		return (this.state.clothing.filter((elem) => {
			return elem.category === this.state.clothingCategory;
		}).map((e, i) => <option value={e.name}>{e.name}</option>)
		)
	}
	galleryDisplay() {
		return (this.state.gallery.filter((elem) => {

			// bypass filtering to original non complex filter
			// if (this.state.clothingCategory === 'SELECT' && this.state.clothingSubCategory === 'SELECT' && this.state.material === 'SELECT') {
			// 		console.log('returning full gallery')
			// 		return this.state.gallery;
			// 	} else {

			// 	return elem.category === this.state.clothingCategory || elem.name === this.state.clothingSubCategory || elem.mat_name === this.state.material
			// 	}
			

			// cat true subcat false mat false
			if (this.state.clothingCategory !== 'SELECT' && this.state.clothingSubCategory === 'SELECT' && this.state.material === 'SELECT') {
				console.log('returning cat')
				return elem.category === this.state.clothingCategory;
			}

			// cat true subcat false mat true
			if (this.state.clothingCategory !== 'SELECT' && this.state.clothingSubCategory === 'SELECT' && this.state.material !== 'SELECT') {
				console.log('returning cat')
				return elem.category === this.state.clothingCategory && elem.mat_name === this.state.material;
			}

			// cat true subcat true mat false
			if (this.state.clothingCategory !== 'SELECT' && this.state.clothingSubCategory !== 'SELECT' && this.state.material === 'SELECT') {
				console.log('returning cat subcat')
				return elem.category === this.state.clothingCategory && elem.name === this.state.clothingSubCategory;
			}

			// cat true subcat true mat true  ADD CONDITION FOR NOTHING RETURNED
			if (this.state.clothingCategory !== 'SELECT' && this.state.clothingSubCategory !== 'SELECT' && this.state.material !== 'SELECT') {
				console.log('returning cat subcat mat')
				return elem.category === this.state.clothingCategory && elem.name === this.state.clothingSubCategory && elem.mat_name === this.state.material;
			}



			// cat false subcat true mat true
			if (this.state.clothingCategory === 'SELECT' && this.state.clothingSubCategory !== 'SELECT' && this.state.material !== 'SELECT') {
				console.log('returning subcat mat')
				return elem.name === this.state.clothingSubCategory && elem.mat_name === this.state.material;
			}

			// cat false subcat true mat false
			if (this.state.clothingCategory === 'SELECT' && this.state.clothingSubCategory !== 'SELECT' && this.state.material === 'SELECT') {
				console.log('returning subcat')
				return elem.name === this.state.clothingSubCategory;
			}

			// cat false subcat false mat true
			if (this.state.clothingCategory === 'SELECT' && this.state.clothingSubCategory === 'SELECT' && this.state.material !== 'SELECT') {
				console.log('returning material')
				return elem.mat_name === this.state.material;
			}

			// cat false subcat false mat false
			if (this.state.clothingCategory === 'SELECT' && this.state.clothingSubCategory === 'SELECT' && this.state.material === 'SELECT') {
				console.log('returning full gallery')
				return this.state.gallery;
			}

		}).map((e, i) => {
			return (
				<div key={i} className='gallery-items'>
					<img className="gallery-images" src={e.image} alt={e.name} />
					<p className='gallery-items-cat'>{e.category}</p>
					<p className='gallery-items-name'>{e.name}</p>
					<p className='gallery-items-mat'>{e.mat_name}</p>

				</div>
			)
		})
		)
	}

	render() {
		return (
			<div id="gallery" >
				<Header />
				<div className="page">
					<h1 className="title">Gallery</h1>

					<ul className="sel-dropdown">
						<li className="gallery-li">
							<span className="styletype">Category</span>
							<select className="select-btn" name="clothingCategory" onChange={(e) => this.handleChange(e.target.name, e.target.value)}>
								<option value="SELECT">SELECT</option><option value="Dresses">Dresses</option><option value="Tops">Tops</option><option value="Skirts">Skirts</option><option value="Pants">Pants</option>
							</select>
						</li>
						<li className="gallery-li">
							<span className="styletype">Pattern</span>
							<select className="select-btn" name="clothingSubCategory" onChange={(e) => this.handleChange(e.target.name, e.target.value)}>
								<option value="SELECT">SELECT</option>
								{
									(this.state.clothingCategory === 'SELECT') ?
										this.subCatTrue() : this.subCatFalse()
								}
							</select>
						</li>
						<li className="gallery-li">
							<span className="styletype">Material</span>
							<select className="select-btn" name="material" onChange={(e) => this.handleChange(e.target.name, e.target.value)} >
								<option value="SELECT">SELECT</option>
								{
									this.state.materials.map((e, i) => <option value={e.name}>{e.name}</option>)
								}


								{/* <select className="select-btn" name="mat_name" onChange={(e) => this.handleChange(e.target.name, e.target.value)}>
								<option value="Select">SELECT</option><option value="Chelsea">Chelsea</option><option value="Maxi">Maxi</option><option value="Shift">Shift</option><option value="Wrap">Wrap</option>
							</select> */}
							</select>
						</li>
					</ul>
					<div className='gallery'>
						{
							this.galleryDisplay()
						}
					</div>
				</div>
				<Footer />
			</div >
		)
	}
}