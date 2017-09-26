import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Detail from './Detail';
import { getClothing, getGallery, getMaterials } from './../services/clothingService';

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
			showModal: false,
			clothing: [],
			clothingCategory: '',
			subClothingCategory: '',
			examplesShow: false,
			gallery: [],
			materials: [],
			materialPicked: '',
			defaultMeasurement: '',
			measurements: {
				Bust: '',
				Chest: '',
				Hip: '',
				Shoulder: '',
				Under_Bust: '',
				Upper_Arm: '',
				Waist: ''
			}
		}

		this.handleClick = this.handleClick.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.addToBag = this.addToBag.bind(this);
		this.catClick = this.catClick.bind(this);
		this.subcatClick = this.subcatClick.bind(this);
		this.customChange = this.customChange.bind(this);
		this.defaultMeasurement = this.defaultMeasurement.bind(this);

	}

	componentDidMount() {

		getClothing().then(response => {

			this.setState({
				clothing: response
			})

			console.log('state clothing:', this.state.clothing);
		})
		// getList().then(response => {
		// 	console.log('response:', response);


		// })
		getGallery().then(response => {

			this.setState({
				gallery: response
			})

			console.log('state gallery:', this.state.gallery);
		})
		getMaterials().then(response => {
			this.setState({ materials: response })
			console.log('state materials:', this.state.materials);
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
	addToBag() {

	}

	catClick(value) {
		console.log('cat button pressed', value);
		this.setState({ clothingCategory: value, subClothingCategory: '', examplesShow: false }, () => console.log(this.state.clothingCategory))
	}
	subcatClick(value) {
		console.log('subcat button pressed', value);
		this.setState({
			subClothingCategory: value,
			examplesShow: true
		}, () => console.log('subcat=', this.state.subClothingCategory))
	}
	materialClick(value) {
		console.log('material button pressed', value);
		this.setState({ materialPicked: value }, () => console.log('materialPicked=', this.state.materialPicked))
	}
	customChange(name, value) {
		this.setState({
			measurements: Object.assign({}, this.state.measurements, { [name]: value })
		})
		console.log(this.state)
	}
	defaultMeasurement(value) {
		console.log('defaultMeasurement pressed', value);
		this.setState({ defaultMeasurement: value }, () => console.log('defaultMeasurement=', this.state.defaultMeasurement))
	}

	render() {

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
					{/* <img src={require('../img/clothing/palazzo-pants.jpg')} alt='pants' width="100%" /> */}

					<section className="content-main">

						<h2>Step 1 : Select Your Design</h2>

						<section className='clothing-row'>
							<div>
								<div>
									<nav className="clothing-cat">
										<button className='categories' name='dresses' type='text' onClick={(e) => this.catClick(e.target.value)} value='dresses'>Dresses</button>
										<button className='categories' name='tops' type='text' onClick={(e) => this.catClick(e.target.value)} value='tops'>Tops</button>
										<button className='categories' name='skirts' type='text' onClick={(e) => this.catClick(e.target.value)} value='skirts'>Skirts</button>
										<button className='categories' name='pants' type='text' onClick={(e) => this.catClick(e.target.value)} value='pants'>Pants</button>
									</nav>
									<nav className='clothing-types'>{
										this.state.clothing.filter((elem) => {
											console.log('filter', this.state.clothingCategory);
											return elem.category === this.state.clothingCategory;
										}).map((e, i) => (<button key={i} className='sub-categories' name={e.name} type='text' onClick={(e) => this.subcatClick(e.target.value)} value={e.name}>{e.name}</button>))
									}
									</nav>
								</div>


								<div className="clothing-display">
									{
										this.state.clothing.filter((elem) => {
											return elem.category === this.state.clothingCategory && elem.name === this.state.subClothingCategory;
										}).map((e) => {
											return (
												<div>
													<img className="clothing-subcat" src={e.image} />
													<h3>{e.name}</h3>
													<h4>${e.price}</h4>
													<p>{e.description}</p>
												</div>)
										})
									}
								</div>
								{/* {products} */}

							</div>

							<div className='gallery-items-container'>
								{this.state.examplesShow == false ? null : <h3>Examples</h3>}
								{
									this.state.gallery.filter((elem) => {

										return elem.category === this.state.clothingCategory && elem.name === this.state.subClothingCategory;
									}).map((e) => {
										return (
											<div>
												<img className="clothing-subcat" src={e.image} alt={e.name} />

												<p>Material {e.material}</p>
											</div>)
									})

								}
							</div>
						</section>

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

								<Detail
									productTitle={this.state.productTitle}
									productImage={this.state.productImage}
									productPrice={this.state.productPrice}
									productDesc={this.state.productDesc}
									addToCart={this.addToCart} />
							</ReactModal>
						</div>

						<h2 id="step2">Step 2 : Customize Your Material</h2>

						<div className="materials-container">
							{
								this.state.materials.map((e, i) => {
									return (
										<div key={i} className='material-box'>
											<div><img className="material-image" value={e.name} src={e.image} />
												<h3>{e.name}</h3>
												<p>{e.fabric}</p>
											</div>
											<button value={e.name} onClick={(e) => this.materialClick(e.target.value)} >Choose</button>
										</div>)
								})

							}

						</div>

						<h2 id="step3">Step 3 : Select Your Measurements For A Custom Fit</h2>

						<p>Need help measuring? <Link to='/measure-myself'>How To Measure Myself</Link></p>

						<button onClick={(e) => this.defaultMeasurement('Use Saved Measurements')} >Use My Saved Measurements</button>

						<div className="measure-container">
							<div className="select-size">
								<p><em>Sizes correspond to your body measurement in inches</em></p>
								<ul id="ContentPlaceHolder1_customSizeSec" className="sel-dropdown">
									<li className="s-size"><span className="styletype">Bust</span><select name="Bust" onChange={(e) => this.customChange(e.target.name, e.target.value)}>
										<option value="Select">SELECT</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="98">98</option><option value="99">99</option><option value="96">96</option><option value="97">97</option><option value="100">100</option>
									</select></li>

									<li className="s-size"><span className="styletype">Chest</span><select name="Chest" onChange={(e) => this.customChange(e.target.name, e.target.value)}>
										<option value="Select">SELECT</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="98">98</option><option value="99">99</option><option value="96">96</option><option value="97">97</option><option value="100">100</option>
									</select></li>

									<li className="s-size"><span className="styletype">Hip</span><select name="Hip" onChange={(e) => this.customChange(e.target.name, e.target.value)}>
										<option value="Select">SELECT</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="98">98</option><option value="99">99</option><option value="96">96</option><option value="97">97</option><option value="100">100</option>
									</select></li>

									<li className="s-size"><span className="styletype">Shoulder</span><select name="Shoulder" onChange={(e) => this.customChange(e.target.name, e.target.value)}>
										<option value="Select">SELECT</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option>
									</select></li>

									<li className="s-size"><span className="styletype">Under Bust</span><select name="Under_Bust" onChange={(e) => this.customChange(e.target.name, e.target.value)}>
										<option value="Select">SELECT</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="98">98</option><option value="99">99</option><option value="96">96</option><option value="97">97</option><option value="100">100</option>
									</select></li>

									<li className="s-size"><span className="styletype">Upper Arm</span><select name="Upper_Arm" onChange={(e) => this.customChange(e.target.name, e.target.value)}>
										<option value="Select">SELECT</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="98">98</option><option value="99">99</option><option value="96">96</option><option value="97">97</option><option value="100">100</option>
									</select></li>

									<li className="s-size"><span className="styletype">Waist</span><select name="Waist" onChange={(e) => this.customChange(e.target.name, e.target.value)}>
										<option value="Select">SELECT</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="98">98</option><option value="99">99</option><option value="96">96</option><option value="97">97</option><option value="100">100</option>
									</select></li>
								</ul>
							</div>
						</div>
					</section>
				</div>
				<Footer />
			</div >
		)
	}
}

