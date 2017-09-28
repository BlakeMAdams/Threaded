import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import Header from './Header';
import Footer from './Footer';
import { getClothing, getGallery, getMaterials } from './../services/clothingService';
import { updateBag, updateMeasurements } from './../ducks/reducer';

class Clothing extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clothing: [],
			clothingCategory: '',
			clothingSubCategory: '',
			price: '',
			image: '',
			gallery: [],
			materials: [],
			materialPicked: '',
			defaultMeasurement: 'no default measurement'


		}

		this.addToBag = this.addToBag.bind(this);
		this.catClick = this.catClick.bind(this);
		this.subcatClick = this.subcatClick.bind(this);
		this.defaultMeasurement = this.defaultMeasurement.bind(this);
		this.priceChange = this.priceChange.bind(this);
	}

	componentDidMount() {

		getClothing().then(response => {

			this.setState({
				clothing: response
			})

			// console.log('state clothing:', this.state.clothing);
		})
		getGallery().then(response => {

			this.setState({
				gallery: response
			})

			// console.log('state gallery:', this.state.gallery);
		})
		getMaterials().then(response => {
			this.setState({ materials: response })
			// console.log('state materials:', this.state.materials);
		})

	}


	addToBag() {
		// add all items from state grouped to pull in order page
		var garment = [this.state.clothingCategory, this.state.clothingSubCategory, this.state.price, this.state.materialPicked, this.state.defaultMeasurement, this.props.measurements, this.state.image];

		this.setState({
			clothingCategory: '',
			clothingSubCategory: '',
			materialPicked: '',
			price: ''

		})
		this.props.updateBag(garment)

	}

	catClick(value) {
		// console.log('cat button pressed', value);
		this.setState({ clothingCategory: value, clothingSubCategory: '' }, () => console.log(this.state.clothingCategory))
	}
	subcatClick(value) {
		// console.log('subcat button pressed', value);
		this.setState({
			clothingSubCategory: value
		}, () => console.log('subcat=', this.state.clothingSubCategory))
	}
	materialClick(value) {
		// console.log('material button pressed', value);
		this.setState({ materialPicked: value }, () => console.log('materialPicked=', this.state.materialPicked))
	}
	defaultMeasurement(value) {
		// console.log('defaultMeasurement pressed', value);
		this.setState({ defaultMeasurement: value }, () => console.log('defaultMeasurement=', this.state.defaultMeasurement))
	}
	priceChange(value) {
		this.setState({ price: value }, () => console.log('price=', this.state.price));
	}
	setImage(url) {
		this.setState({ image: url }, () => console.log('url=', this.state.image));
	}

	render() {
		console.log('props', this.props)
		return (
			<div id="clothing">
				<Header />
				<div className="page">
					<h1 className="title">Clothing</h1>
					{/* <img src={require('../img/clothing/palazzo-pants.jpg')} alt='pants' width="100%" /> */}

					<section className="content-main">

						<h2 className='step-title'>Step 1 : Select Your Design</h2>
						<section className='step'>
							<section className='clothing-row'>
								<div>
									<div className='clothing-nav-container'>
										<nav className="clothing-cat">
											<button className='categories' name='Dresses' type='text' onClick={(e) => this.catClick(e.target.value)} value='Dresses'>Dresses</button>
											<button className='categories' name='Tops' type='text' onClick={(e) => this.catClick(e.target.value)} value='Tops'>Tops</button>
											<button className='categories' name='Skirts' type='text' onClick={(e) => this.catClick(e.target.value)} value='Skirts'>Skirts</button>
											<button className='categories' name='Pants' type='text' onClick={(e) => this.catClick(e.target.value)} value='Pants'>Pants</button>
										</nav>
										<nav className='clothing-types'>{
											this.state.clothing.filter((elem) => {
												{/* console.log('filter', this.state.clothingCategory); */}
												return elem.category === this.state.clothingCategory;
											}).map((e, i) => (<button key={i} className='sub-categories' name={e.name} type='text' onClick={(event) => { this.subcatClick(event.target.value); this.priceChange(e.price); this.setImage(e.image) }} value={e.name}>{e.name}</button>))
										}
										</nav>
									</div>


									<div className="clothing-display">
										{
											this.state.clothing.filter((elem) => {
												return elem.category === this.state.clothingCategory && elem.name === this.state.clothingSubCategory;
											}).map((e, i) => {

												return (
													<div key={i} className='clothing-item-display'>
														<img className='clothing-item-display-img' src={e.image} alt='e.name' />
														
														<div className='clothing-item-details'>
															<h3>{e.name}</h3>
															<h4>${e.price}</h4>
															<p>{e.description}</p>

														</div>
													</div>)
											})
										}
									</div>
									{/* {products} */}

								</div>

								<div className='gallery-items-container'>
									<h3>Examples</h3>
									{
										this.state.gallery.filter((elem) => {

											return elem.category === this.state.clothingCategory && elem.name === this.state.clothingSubCategory;
										}).map((e, i) => {
											return (
												<div key={i}>
													<img className="clothing-subcat" src={e.image} alt={e.name} />

													<p>Material {e.material}</p>
												</div>)
										})
									}
								</div>
							</section>
						</section>


						<h2 className='step-title' id="step2">Step 2 : Customize Your Material</h2>
						<section className='step'>
							<div className="materials-container">
								{
									this.state.materials.map((e, i) => {
										return (
											<div key={i} className='material-box'>
												<div><img className="material-image" value={e.name} src={e.image} alt='e.name' />
													<h3>{e.name}</h3>
													<p>{e.fabric}</p>
												</div>
												<button value={e.name} onClick={(e) => this.materialClick(e.target.value)} >Choose</button>
											</div>)
									})

								}

							</div>
						</section>

						<h2 className='step-title' id="step3">Step 3 : Select Your Measurements For A Custom Fit</h2>
						<section className='step'>
							<div className='measurements-container'>
								<p>Need help measuring? <button className='btn-link'><Link to='/measure-myself'>How To Measure Myself</Link></button></p>

								<button onClick={(e) => this.defaultMeasurement('Use Saved Measurements')} >Use My Saved Measurements</button>

								<div className="measurements-box">
									<div className="select-size">
										<p><em>Sizes correspond to your body measurement in inches</em></p>
										<div className='measurements-dropdowns'>
											<ul className="sel-dropdown">

												<li className="s-size"><span className="styletype">Chest</span><select name="Chest" onChange={(e) => this.props.updateMeasurements(e.target.name, e.target.value)}>

													<option value="Select">SELECT</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="98">98</option><option value="99">99</option><option value="96">96</option><option value="97">97</option><option value="100">100</option>
												</select></li>

												<li className="s-size"><span className="styletype">Bust</span><select name="Bust" onChange={(e) => this.props.updateMeasurements(e.target.name, e.target.value)}>
													<option value="Select">SELECT</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="98">98</option><option value="99">99</option><option value="96">96</option><option value="97">97</option><option value="100">100</option>
												</select></li>

												<li className="s-size"><span className="styletype">Under Bust</span><select name="Under_Bust" onChange={(e) => this.props.updateMeasurements(e.target.name, e.target.value)}>
													<option value="Select">SELECT</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="98">98</option><option value="99">99</option><option value="96">96</option><option value="97">97</option><option value="100">100</option>
												</select></li>
											</ul>
											<ul className="sel-dropdown">
												<li className="s-size"><span className="styletype">Shoulder</span><select name="Shoulder" onChange={(e) => this.props.updateMeasurements(e.target.name, e.target.value)}>
													<option value="Select">SELECT</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option>
												</select></li>

												<li className="s-size"><span className="styletype">Upper Arm</span><select name="Upper_Arm" onChange={(e) => this.props.updateMeasurements(e.target.name, e.target.value)}>
													<option value="Select">SELECT</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="98">98</option><option value="99">99</option><option value="96">96</option><option value="97">97</option><option value="100">100</option>
												</select></li>

												<li className="s-size"><span className="styletype">Hip</span><select name="Hip" onChange={(e) => this.props.updateMeasurements(e.target.name, e.target.value)}>
													<option value="Select">SELECT</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="98">98</option><option value="99">99</option><option value="96">96</option><option value="97">97</option><option value="100">100</option>
												</select></li>
											</ul>
											<ul className="sel-dropdown">

												<li className="s-size"><span className="styletype">Waist</span><select name="Waist" onChange={(e) => this.props.updateMeasurements(e.target.name, e.target.value)}>
													<option value="Select">SELECT</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="98">98</option><option value="99">99</option><option value="96">96</option><option value="97">97</option><option value="100">100</option>
												</select></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div>
								<button onClick={this.addToBag}><Link to='/bag'>Add To Bag</Link></button>
							</div>
						</section>

					</section>
				</div>
				<Footer />
			</div >
		)
	}
}
function mapStateToProps(state) {
	return {
		bag: state.bag,
		measurements: state.measurements,
		
	}
}
let outputActions = {
	updateBag,
	updateMeasurements
}
export default connect(mapStateToProps, outputActions)(Clothing)