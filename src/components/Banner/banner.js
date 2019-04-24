import React, { Component } from 'react';
import style from './banner.css';

import HeroText from './HeroText/heroText';

export default class banner extends Component {


  render() {
    return (
      <div>
          <div className={style.flexcontainer}>
          Banner
               <HeroText>
                   
               </HeroText>
          </div>
      </div>
    )
  }
}
