import React from 'react'
import style from './heroText.css'

export default function heroText() {
//const seprateText=[{text:'i'},{text:'m'},{text:'a'},{text:'w'}];

let str=['I',' ','m',' ','a',' ','w','e','b',' ','d','e','v','l','o','p','e','r'];

const showItem = () =>{
  return str.map((item,i)=>{
    return(
      <span key={i} className={style.herosize}>
        {item}
      </span>
    )
  })
}
  return (
    <div className={style.herotext}>
        {showItem()}
    </div>
  )
}
