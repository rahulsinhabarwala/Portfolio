import React from 'react';
// import {Link} from 'react-router-dom';
import './sideNavItems.scss'
import FontAwesome from 'react-fontawesome';

export default function sideNavItems() {

  const items =[{
        icon:'fas fa-home'
  },{
    icon:'far fa-user'
    
  },{
    icon:'fas fa-cogs'
    
  },{
    icon:'far fa-eye'
  }
]

const showItems=()=>{
  return items.map((item,i)=>{
   return(
      <a key={i} className="nav_anchor">
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
