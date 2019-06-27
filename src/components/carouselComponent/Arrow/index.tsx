import React from 'react'

import './index.less'

interface arrowProps{
  Name?:string
  onClick?:any
}



//箭头前切换
const SlidePreArrow=(props:arrowProps)=>{
  const {onClick}=props
  return (
    <div className='prevArrow-wrap' onClick={onClick}>
      <a href="javascript:void(0)" className='prev-btn switch-btn'></a>
  </div>
  )
}
//箭头后切换
const SlideNextArrow=(props:arrowProps)=>{
  const {onClick}=props
  return (
    <div className='nextArrow-wrap' onClick={onClick}>
      <a href="javascript:void(0)" className='next-btn switch-btn'></a>
  </div>
  )
}
export{SlidePreArrow,SlideNextArrow}