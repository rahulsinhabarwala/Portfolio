import React, { Component } from 'react';
import NavBar from '../../components/Banner/NavBar/navbar';
import './layout.scss';

import Banner from '../../components/Banner/banner'
// import Fotter from '../../Components/Footer/footer';

class Layout extends Component {
	render() {
		return (
				<div className='container-fluid'>
					<NavBar/>
					<Banner/>
				</div>
		)
	}
}
export default Layout;