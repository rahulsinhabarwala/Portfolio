import React,{Component} from 'react';
import './heroText.scss'

export default class heroText extends Component {
//const seprateText=[{text:'i'},{text:'m'},{text:'a'},{text:'w'}];
componentDidMount(){
  let x = document.querySelectorAll('span')
  x.forEach(function(element) {
    // console.log(element)
   return (element.onmouseover(()=>{
    $(this).addClass('rubberBand');
   })
   )
  })
}

render() {
const str=['I','_','m','_','a','_','w','e','b','_','d','e','v','l','o','p','e','r'];

const showItem = () =>{
  return str.map((item,i)=>{
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
