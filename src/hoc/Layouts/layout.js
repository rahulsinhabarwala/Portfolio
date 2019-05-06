import React, { Component } from 'react';

import './layout.scss';

import Banner from '../../components/Banner/banner'
// import Fotter from '../../Components/Footer/footer';

class Layout extends Component {
	render() {
		return (
			<div className='container-fluid'>
				<Banner>
				</Banner>
			</div>
		)
	}
}
export default Layout;