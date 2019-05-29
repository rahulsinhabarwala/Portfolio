import React, { Component } from 'react';
import NavBar from '../../components/Banner/NavBar/navbar';
import Banner from '../../components/Banner/banner';
import './layout.scss';
import throttle from 'lodash.throttle';

// import Fotter from '../../Components/Footer/footer';

class Layout extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleWheel = this.handleWheel.bind(this);
		this.handleClickThrottled = throttle(this.handleWheel, 1000);
		}
		componentWillUnmount() {
			this.handleClickThrottled.cancel();
		}
	
	  handleClick(event) {
		let getactive = document.querySelectorAll('.navItems a')
		getactive.forEach( item=>{
		    item.classList.remove('active');
		  })
		  event.target.classList.add('active');
			switch(event.target.id) {
				case '0':
					return this.setState({
						key:'',
						value:"Hello,-I'm Justine.-I’m a UI Designer from France."//
					});
				case '1':
					return this.setState({
						key:'Skills:',
						value:'Hi,-I’m John,-web developer.'
					});
				case '2':
					return this.setState({
						key:'About:',
						value:'Hi,-I’m John,-web developer.'
					});
					case '3':
					return this.setState({
						key:'MyWork:',
						value:'Hi,-I’m John,-web developer.'
					});
				default:
					return this.setState({
						key:'Me:',
						value:'Hi,-I’m John,-web developer.' 
				});
			}
		
	  }
		handleWheel(event){
			//console.log(event); // => nullified object.
			const eventType = event.type;
  console.log(eventType);
			//this.props.loadMore();
			
		}
	state={
		key:'Me :',
		value:'Hi,-I’m John,-web developer.'
		}
	
	render() {
		return (
				<div className='container-fluid'
				onWheel={this.handleClickThrottled}
				>
					<NavBar handleClick={this.handleClick}/>
					<Banner text={this.state} />
				</div>
		)
	}
}
export default Layout;