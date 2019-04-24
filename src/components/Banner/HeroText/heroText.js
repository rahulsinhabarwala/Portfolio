import React,{Component} from 'react';
import './heroText.scss'

export default class heroText extends Component {
//const seprateText=[{text:'i'},{text:'m'},{text:'a'},{text:'w'}];
componentDidMount(){
  const x = document.querySelectorAll('span')  
  x.forEach( e=>{
    e.addEventListener('mouseover',()=>{
      e.classList.add('animated');
    })
    e.addEventListener('animationend',()=>{
      e.classList.remove('animated')
    })
  })
}

render() {
//const str=['I','_','m','_','a','_','w','e','b','_','d','e','v','l','o','p','e','r'];
let str2="iam awebdeveloper";
str2=str2.split("");
//console.log(str2);
const showItem = () =>{
  return str2.map((item,i)=>{
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
