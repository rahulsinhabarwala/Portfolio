import React,{Component} from 'react';
import './heroText.scss';
import '../../animations.scss';

export default class heroText extends Component {
//const seprateText=[{text:'i'},{text:'m'},{text:'a'},{text:'w'}];
//x.split("").reduce((i,c)=>{temp={"data":c};i.push(temp);return i;},[]);
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
//let maintext=['I','\n','m','<br>','a','_','w','e','b','_','d','e','v','l','o','p','e','r'];
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
    <div className='herotext'>
          {showItem()}
    </div>
  )
}
}
