import React, { Component } from 'react';
import './banner.scss';

import HeroText from './HeroText/heroText';

export default class banner extends Component {


  render() {
    return (
      <div>
          <div className='flexcontainer'>
          
               <HeroText>
                   
               </HeroText>
          </div>
      </div>
    )
  }
}
