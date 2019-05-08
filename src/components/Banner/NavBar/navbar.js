import React, { Component } from 'react';
import SideNavItems from './sideNavItems';
import SocialMediaIcons from '../../SocilMediaIcons/socialMediaIcons';

import './navbar.scss'
export default class navbar extends Component {
  render() {
    return (
        <div className="sideBar" id="nav_bar">
          <SideNavItems/>
          <SocialMediaIcons/>
        </div>
            
        )
  }
}
