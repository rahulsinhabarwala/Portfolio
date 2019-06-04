import React, { Component } from 'react';
import NavBar from '../../components/Banner/NavBar/navbar';
import Banner from '../../components/Banner/banner';
import './layout.scss';
import WheelReact from 'wheel-react';
// import Fotter from '../../Components/Footer/footer';
class Layout extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		}
		
	  handleClick(event) {
		  //active class change
		let getactive = document.querySelectorAll('.navItems a')
		getactive.forEach( item=>{
		    item.classList.remove('active');
		  })
		  event.target.classList.add('active');
		  //state change
		  let id =  parseInt(event.target.id,);
		  this.statechanger(id);		
	  }
	  statechanger(active){
		switch(active) {
			case 0:
				return this.setState({
					id:0,
					key:'',
					value:"Hello,-I'm Justine.-I’m a UI Designer from France."
				});
			case 1:
				return this.setState({
					id:1,
					key:'About:',
					value:'Hi,-I’m John,-web developer.'
				});
			case 2:
				return this.setState({
					id:2,
					key:'Skills:',
					value:'Hi,-I’m John,-web developer.'
				});
				case 3:
				return this.setState({
					id:3,
					key:'MyWork:',
					value:'Hi,-I’m John,-web developer.'
				});
			default:
				return this.setState({
					id:0,
					key:'Me:',
					value:'Hi,-I’m John,-web developer.' 
			});
		}
	  }
	state={
		id:0,
		key:'',
		value:"Hello,-I'm Justine.-I’m a UI Designer from France."
		}
	componentDidMount(){
		WheelReact.config({
			up: () => {
			let active = this.state.id+1;
			
			let getactive = document.querySelectorAll('.navItems a')
			getactive.forEach( item=>{
				console.log(getactive)
			})
			//event.target.classList.add('active');
		  
			this.statechanger(active);	
			},
			down: () => {
				let active
				if(this.state.id==0){active=3}
				else{active = this.state.id-1}
				this.statechanger(active);}
		  });
	}
	componentWillUnmount() {
		this.handleClickThrottled.cancel();
		WheelReact.clearTimeout();
	}
	render() {
		return (
				<div className='container-fluid' {...WheelReact.events}
				//onWheel={this.handleClickThrottled}
				>
					<NavBar handleClick={this.handleClick}/>
					<Banner text={this.state} />
				</div>
		)
	}
}
export default Layout;