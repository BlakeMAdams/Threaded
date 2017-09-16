import React, { Component } from 'react';
import ReactModal from 'react-modal';

import Header from './Header';
import Footer from './Footer';
import Detail from './Detail';
import { getBottoms, getShirts, getDresses, getPatterns, getImage, getList } from './../services/clothingService';

export default class Clothing extends Component {
	constructor() {
		super();

		this.state = {
			products: [],
			productTitle: '',
			productImage: '',
			productPrice: '',
			productDesc: '',
			cartTotal: '',
			cartItems: [],
			showModal: false
		}

		this.handleClick = this.handleClick.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.clickBottoms = this.clickBottoms.bind(this);
		this.clickDresses = this.clickDresses.bind(this);
		this.clickShirts = this.clickShirts.bind(this);
		this.clickPatterns = this.clickPatterns.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	componentDidMount() {


		getList().then(response => {
			console.log('response:', response);

			var counter = Math.floor(Math.random() * (1004 - 1) + 1);
			var author = response[counter].author;
			var authorUrl = response[counter].author_url;

			this.setState({
				heroList: response,
				heroAuthor: author,
				heroAuthorUrl: authorUrl
			})
			console.log('heroList', this.state.heroList);
		})

	}
	handleOpenModal() {
		this.setState({ showModal: true });
	}

	handleCloseModal() {
		this.setState({ showModal: false });
	}

	clickBottoms() {
		getBottoms().then(response => {
			this.setState({
				products: response
			})
		})
	}

	clickShirts() {
		getShirts().then(response => {
			this.setState({
				products: response
			})
		})
	}

	clickDresses() {
		getDresses().then(response => {
			this.setState({
				products: response
			})
		})
	}

	clickPatterns() {
		getPatterns().then(response => {
			this.setState({
				products: response
			})
		})
	}

	handleClick(image, price, title, desc) {
		this.handleOpenModal();
		this.setState({
			productTitle: title,
			productImage: image,
			productPrice: price,
			productDesc: desc
		})
		// console.log(this.state.productDesc)
	}

	addToCart(str, desc) {
		this.handleCloseModal();
		// this.cartLooper();
		console.log(desc + ' description grabbed')
		var cartArray = Object.assign(this.state.cartItems);
		cartArray.push(desc);
		var total = Number(this.state.cartTotal) + Number(this.state.productPrice)
		this.setState({
			cartTotal: total,
			cartItems: cartArray
		})
		// console.log('cart items ' + this.state.cartItems)
	}

	render() {
		let varStyle = {
			height: this.state.heroHeight,
			width: this.state.heroWidth,
			backgroundImage: "url(" + this.state.heroBackground + ")"
		}
		const products = this.state.products.map((product, i) => (
			<ul key={i} className='product'>
				<h3>{product.title}</h3>
				<img onClick={() => this.handleClick(product.image, product.price, product.title, product.desc)} src={product.image} />

			</ul>
		))

		return (
			<div id="clothing">
				<Header />
				<div className="page">
					<h1 className="title">Clothing</h1>

					<section className="content-main">
						

						<div className="nav">

							<section className="col-l">
								<div className="item-nav">

									<div className="button-container">
										<h2>Shirts</h2>
										<button className="btn-shirt" onClick={() => this.clickShirts()} alt="shirts"></button>

									</div>

									<div className="button-container">
										<h2>Bottoms</h2>
										<button className="btn-bottom" onClick={() => this.clickBottoms()} alt="bottoms"></button>

									</div>

									<div className="button-container">
										<h2>Dresses</h2>
										<button className="btn-dress" onClick={() => this.clickDresses()} alt="dresses"> </button>

									</div>

									<div className="button-container">
										<h2>Patterns</h2>
										<button className="btn-pattern" onClick={() => this.clickPatterns()} alt="patterns"></button>

									</div>

								</div>
							</section>

							<section className="col-r">

								<div className="cart">
									<h3>Cart</h3>

									{/* {this.cartLooper} */}
									<p>{this.state.cartItems.join(', ')}</p>

									<h4>TOTAL: ${this.state.cartTotal}.00</h4>

									{/* <button onClick={() => this.clickCart()}>Save Cart</button> */}
								</div>

							</section>

						</div>


						<div className='products-container'>
							{products}
						</div>

						<div>
							<ReactModal
								isOpen={this.state.showModal}
								contentLabel="Inline Styles Modal Example"
								style={{
									overlay: {
										backgroundColor: 'rgba(0,0,0,0.5)'
									},
									content: {
										color: '#222',
										backgroundColor: 'rgba(255,255,255,0.95)'

									}
								}}
							>
								<button className="btn close" onClick={this.handleCloseModal}>X</button>
								{/* <div className="detail"> */}
								<Detail
									productTitle={this.state.productTitle}
									productImage={this.state.productImage}
									productPrice={this.state.productPrice}
									productDesc={this.state.productDesc}
									addToCart={this.addToCart} />
								{/* </div> */}

							</ReactModal>
						</div>

					</section>
				</div>
				<Footer />
			</div>
		)
	}
}

