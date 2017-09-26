this.clickBottoms = this.clickBottoms.bind(this);
this.clickDresses = this.clickDresses.bind(this);
this.clickShirts = this.clickShirts.bind(this);
this.clickPatterns = this.clickPatterns.bind(this);
this.handleOpenModal = this.handleOpenModal.bind(this);
this.handleCloseModal = this.handleCloseModal.bind(this);

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


{/* filter database clothings by this.state.category */ }

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


			<p>{this.state.cartItems.join(', ')}</p>

			<h4>TOTAL: ${this.state.cartTotal}.00</h4>

			{/* <button onClick={() => this.clickCart()}>Save Cart</button> */}
		</div>

	</section>

</div>