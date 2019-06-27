import React from 'react'

import './index.less'

interface arrowProps{
  Name?:string
  onClick?:any,
  isHotList:boolean
}

//箭头前切换
const SlidePreArrow=(props:arrowProps)=>{
  const {onClick,isHotList}=props
  
  return (
    <div className={isHotList?'prevArrow-wrap-list':'prevArrow-wrap'} onClick={onClick}>
      <a href="javascript:void(0)" className='prev-btn switch-btn'></a>
  </div>
  )
}
//箭头后切换
const SlideNextArrow=(props:arrowProps)=>{
  const {onClick,isHotList}=props
  return (
    <div className={isHotList?'nextArrow-wrap-list':'nextArrow-wrap'} onClick={onClick} >
      <a href="javascript:void(0)" className='next-btn switch-btn'></a>
  </div>
  )
}
export{SlidePreArrow,SlideNextArrow}