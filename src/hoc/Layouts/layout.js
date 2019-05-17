import React, { Component } from 'react';
import NavBar from '../../components/Banner/NavBar/navbar';
import './layout.scss';

import Banner from '../../components/Banner/banner'
// import Fotter from '../../Components/Footer/footer';

class Layout extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	  }
	  handleClick(event) {
		this.setState({
			str:"dasdffargrtw-ergtwerwgt-rgwsfsfdefdsfsd"
		})
	
		//let getactive = document.querySelectorAll('.navItems a')
		//   getactive.forEach( item=>{
		//     item.classList.remove("active");
		//   })
		//   event.target.classList.add('active');
	  }

	state={
		str:'Hi,-I’m John,-web developer.'
	  }
	  
	render() {
		return (
				<div className='container-fluid'>
					<NavBar handleClick={this.handleClick}/>
					<Banner text={this.state} />
				</div>
		)
	}
}
export default Layout;