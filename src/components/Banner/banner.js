import React, { Component } from 'react';
import Herotext from '../Banner/HeroText/heroText';

import './banner.scss';
export default class banner extends Component {
  render() {
    return (
          <div className="row">
            <Herotext className="herotext"/>
        </div>
    )
  }
}
