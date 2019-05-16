import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import './sideNavItems.scss'
import FontAwesome from 'react-fontawesome';

export default class bannsideNavItems extends Component{

      items=[{
        icon:'fas fa-home',
        active:true,
        value:'home'},{icon:'far fa-user',active:false,value:'about'},{icon:'fas fa-cogs',active:false,value:'skills'},{icon:'far fa-eye',active:false,value:'my_work'}]

// handleClick = (event) => {
//   let getactive = document.querySelectorAll('.navItems a')
//   getactive.forEach( item=>{
//     item.classList.remove("active");
//   })
//   event.target.classList.add('active');
// }

render(){
  console.log(this.props)
  
  let showItems=()=>{
    return this.items.map((item,i)=>{
     return(
        <a href='javascript:void(0)' key={i} className={`nav_anchor ${item.active?"active":''}`}
        onClick={this.props.handleClick.handelClick}
        value={item.value}
        >
          <FontAwesome name={item.icon} key={i}>
          </FontAwesome>
        </a>
        )
    })
  } 
  return (
    <nav className="navItems">
    {showItems()}
    </nav>
    )
  }
}
 
