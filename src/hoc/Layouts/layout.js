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
			console.log(event.target.id)
			if(event.target.id === "0"){
				this.setState({
					str:'Hi,-I’m John,-web developer.'
				})
			}
			else if(event.target.id==="1"){
				this.setState({
					str:'about,-I’m John,-web developer.'
				})
			}
			else if(event.target.id==="2"){
				this.setState({
					str:'skills,-I’m John,-web developer.'
				})
			}
			else{
				this.setState({
					str:'mywork,-I’m John,-web developer.'
				})
			}
		
	
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