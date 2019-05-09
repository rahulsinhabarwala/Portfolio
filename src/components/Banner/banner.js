import React, { Component } from 'react';
import Herotext from '../Banner/HeroText/heroText';
import './banner.scss';
export default class banner extends Component {
  render() {
    return (
          <div className="row bg">         
          <span className="tags top-tags">&lt;html&gt;<br/>&nbsp;&nbsp; &lt;body&gt; </span>
            <Herotext/>
            <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br/> &lt;/html&gt; </span>
        </div>
    )
  }
}
