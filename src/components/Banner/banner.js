import React, { Component } from 'react';
import './banner.scss';

class banner extends Component {
    componentDidMount(){
        let allSpan = document.querySelectorAll('span')
        let t=0;  
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
        let string="Hi, I’m John,web developer.";
        let maintext= string.split("");
        console.log(maintext)
        const showItem = () =>{
          return maintext.map((item,i)=>{
            if(i!==3 && i!==12){
              return(
                <span key={i} className='herosize'>{item}</span>
              )}
            else{
              return(
                <>
                <span key={i} className='herosize'>{item}</span><br />
                </>
              )}
          })
        }
        return (
          <div className='container-fluid'>
            <div className="container">
              <div className="row">
                  {showItem()}
                </div>
            </div>
          </div>
          
        )
      }
}
export default banner;