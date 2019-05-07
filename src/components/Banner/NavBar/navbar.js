import React, { Component } from 'react';
import SideNavItems from './sideNavItems';
import './navbar.scss'
export default class navbar extends Component {
  render() {
    return (
        <div className="sideBar">
          <SideNavItems/>
        </div>
            
        )
  }
}
