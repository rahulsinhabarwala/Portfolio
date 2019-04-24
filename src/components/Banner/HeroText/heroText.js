import React,{Component} from 'react';
import './heroText.scss'

export default class heroText extends Component {
//const seprateText=[{text:'i'},{text:'m'},{text:'a'},{text:'w'}];
componentDidMount(){
  const x = document.querySelectorAll('span')
  let y =0;  
  x.forEach( e=>{
    e.style.opacity='0';
    window.setTimeout(()=>{
      e.style.opacity='1';
      e.classList.add('animated');
    },y)
    y=y+60;
    e.addEventListener('mouseover',()=>{
      e.classList.add('animated');
    })
    e.addEventListener('animationend',()=>{
      e.classList.remove('animated');
    })
  })
}

render() {
//const str=['I','_','m','_','a','_','w','e','b','_','d','e','v','l','o','p','e','r'];
let string="Hi, I am a web developer";
let maintext= string.split("");
const showItem = () =>{
  return maintext.map((item,i)=>{
    return(
      <span key={i} className='herosize'>
        {item}
      </span>
    )
  })
}
  return (
    <div className='herotext'>
        {showItem()}
    </div>
  )
}
}
