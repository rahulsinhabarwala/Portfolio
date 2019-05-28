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
    componentDidUpdate(){
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
        let key= this.props.text.text.key;
        let value= this.props.text.text.value;
        let key1 = key.split("");
        let value1 = value.split("");
        const showTitle=()=>{
          return key1.map((item,i)=>{ 
            return(
              <span key={i} className='herosize red'>{item}</span>
            )
        }) 
        }
        const showItem = () =>{
          return value1.map((item,i)=>{  
            if(item==="-"){
             // maintext.splice(i, 1);
              return(<br/>)
              }
               else
                  return(
                    <span key={i} className='herosize'>{item}</span>
                  )
                })
              }
        return (
          <div  className="herotext">
            <h1>{showTitle()}</h1>
            <h2>{showItem()}</h2> 
            <h3>Front End Developer / React.js / Sass </h3>
          </div>
        )
    }
}
