import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCustomerInfo } from './../services/customer';

import menuIcon from '../img/home.png';
import bagIcon from '../img/icon_bag.png';
import fbIcon from '../img/cart.svg';
import instIcon from '../img/cart.svg';

 class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			role: '',
			logged: false
			
		};

	}

	componentDidMount() {
		getCustomerInfo().then(
			res => {
				this.setState({
					role: res.role,
					logged: res.logged
				})
			}
		)
	}


render() {
	
	
	return (
		<div id="header">
			<div className="header-container">
				<header>
					<nav className="flex">
						<div className="flex site-title">
							<h1><Link to="/"> Threaded <img className="site-logo" src="http://www.pngall.com/wp-content/uploads/2017/01/Sewing-Needle-Transparent.png" alt="Threaded" /></Link></h1>
							<p>High Quality Clothing Tailored To You</p>
							<div className="flex main-nav">
								<Link to="/">Home</Link>
								<Link to="/about">About Threaded</Link>
								<Link to="/how-it-works">How it Works</Link>
								<Link to="/clothing">Clothing</Link>
								{/* <Link to="/materials">Materials</Link> */}
								<Link to="/gallery">Gallery</Link>
								{/* <Link to="/measureme-myself">Measure Myself</Link> */}

							</div>
							<div className="mobile-menu"><img src={menuIcon} alt="menu" /></div>
						</div>
						<div className="flex main-nav-container">
							<div className="flex">
								{/* social icons */}
								<img className="icon" src={fbIcon} alt="facebook" />
								<img className="icon" src={instIcon} alt="instagram" />
							</div>
							<div className="flex">
							
								{/* <a href={process.env.REACT_APP_LOGOUT}>LogOUT!</a> */}
								{this.state.logged === true ? <Link to="/profile">My Profile</Link> : ''}
								
								{this.state.logged === false ? <a href={process.env.REACT_APP_LOGIN}>Log In</a> :
									<a href={process.env.REACT_APP_LOGOUT}>Log Out</a>} &nbsp;
								<Link to="/bag"><img src={bagIcon} alt="Bag" /> {this.props.bag.length}</Link>
								
							</div>
						</div>
					</nav>
				</header>
			</div >
		</div >
	)
}

}

function mapStateToProps(state) {
	return {
		bag: state.bag
	}
}

export default connect(mapStateToProps)(Header)