import React from 'react'
import './socialMediaIcons.scss'
export default function socialMediaIcons() {
    
    const items =[{
        icon:'fab fa-twitter'
  },{
    icon:'fab fa-facebook'
    
  },{
    icon:'fab fa-instagram'
  }
]

const showItems=()=>{
  return items.map((item,i)=>{
   return(
      <li><a href="/" target="_blank"><i class={item.icon}></i></a></li>
   )
  })
}
  
    return (
        <ul>
             {showItems()}
        </ul>
  )
}
