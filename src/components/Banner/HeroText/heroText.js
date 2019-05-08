import React, { Component } from 'react'
import './heroText.scss';
import '../../../animations.scss';

export default class heroText extends Component {
    
  
  componentDidMount(){
        let allSpan = document.querySelectorAll('.herotext span')
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
             if(i===8){
               return(
                 <span key={i} className='herosize black'>{item}</span>
               )}
              // else if(i>22){
              //   return(
              //     <span key={i} className='herosize black'>{item}</span>
              //   )}
         else   
          if(i!==3 && i!==12){
                  return(
                    <span key={i} className='herosize'>{item}</span>
                  )}
           else{
              return(
                <><span key={i} className='herosize'>{item}</span><br/>
                </>
              )}
          })
        }
        return (
          <div  className="herotext">
            <h1> 
              {showItem()}
            </h1> 
          </div>
              
        )
      }
}
