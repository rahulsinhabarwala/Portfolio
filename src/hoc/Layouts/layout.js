import React, { Component } from 'react';
import NavBar from '../../components/Banner/NavBar/navbar';
import Banner from '../../components/Banner/banner';
import './layout.scss';
// import Fotter from '../../Components/Footer/footer';

class Layout extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		}
	
	  handleClick(event) {
			console.log('scrol')
			let getactive = document.querySelectorAll('.navItems a')
		  getactive.forEach( item=>{
		    item.classList.remove('active');
		  })
		  event.target.classList.add('active');

			switch(event.target.id) {
				case '0':
					return this.setState({
						str:'Hi,-I’m John,-web developer.'
					});
				case '1':
					return this.setState({
						str:'About,-I’m John,-web developer.'
					});
				case '2':
					return this.setState({
						str:'Skills,-I’m John,-web developer.'
					});
					case '3':
					return this.setState({
						str:'Mywork,-I’m John,-web developer.'
					});
				default:
					return this.setState({
						str:'Hi,-I’m John,-web developer.'
				});
			}
		
	  }

	state={
		str:'Hi,-I’m John,-web developer.'
		}
		
	render() {
		return (
				<div className='container-fluid'
				onWheel={this.handleClick}>
					<NavBar handleClick={this.handleClick}/>
					<Banner text={this.state} />
				</div>
		)
	}
}
export default Layout;