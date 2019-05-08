import React, { Component } from 'react';
import Herotext from '../Banner/HeroText/heroText';

import './banner.scss';
export default class banner extends Component {
  render() {
    return (
          <div className="row bg">
          <span class="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
            <Herotext/>
        </div>
    )
  }
}
