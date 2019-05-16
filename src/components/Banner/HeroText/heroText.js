import React, { Component } from 'react'
import './heroText.scss';
import '../../../animations.scss';

export default class heroText extends Component {
 
  componentDidMount(){
        let allSpan = document.querySelectorAll('.herotext span')
        let t=0;  
       // window.addEventListener('scroll', this.handleScroll.bind(this));
        allSpan.forEach( item=>{
          item.style.opacity='0';
          window.setTimeout(()=>{
            item.style.opacity='1';
            item.classList.add('bounceIn');
          },t+=50);
          item.addEventListener('mouseover',()=>{
            item.classList.add('animated');
          })
          item.addEventListener('animationend',()=>{
            item.classList.remove('animated');
          })
          item.addEventListener('animationend',()=>{
            item.classList.remove('bounceIn');
          })
        })
      }
      render() {
        let string= this.props.text.text.str;
        let maintext= string.split("");
        const showItem = () =>{
          return maintext.map((item,i)=>{
             if(i===8){
               return(
                 <span key={i} className='herosize black'>{item}</span>
               )}
               else if(i!==3 && i!==12){
                  return(
                    <span key={i} className='herosize'>{item}</span>
                  )}
                else{return(<><span key={i} className='herosize'>{item}</span><br/></>)}})
              }
        return (
          <div  className="herotext">
          <span className=""></span>
            <h1>{showItem()}</h1> 
            <h2>Front End Developer / React.js / Sass </h2>
          </div>
        )
    }
}
 // componentWillUnmount() {
      //   window.removeEventListener('scroll', this.handleScroll.bind(this));
      // }
      
      // handleScroll(e) {
      //    this.setState({
      //      str:'Hi, I’m John,web developer.'
      //    })
      //   let allSpan = document.querySelectorAll('.herotext span')
      //   let t=0;  
      //   allSpan.forEach( item=>{
      //     item.style.opacity='0';
      //     window.setTimeout(()=>{
      //       item.style.opacity='1';
      //       item.classList.add('bounceIn');
      //     },t+=50);
      //     item.addEventListener('mouseover',()=>{
      //       item.classList.add('animated');
      //     })
      //     item.addEventListener('animationend',()=>{
      //       item.classList.remove('animated');
      //     })
      //     item.addEventListener('animationend',()=>{
      //       item.classList.remove('bounceIn');
      //     })
      //   })
      // }