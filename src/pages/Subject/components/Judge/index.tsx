import React ,{useState}from 'react'
import {Rate} from 'antd'
import './index.less'


export default function Judge() {
  const [star,setStar]=useState(0)
  let [timer,setTimer]=useState(0)
  const desc=['很差', '较差','还行','推荐','力荐']
  const debounceHover=(value:number,time:number)=>{
      if(value){
        if(timer){
          clearTimeout(timer)
        }
        setTimer(window.setTimeout(()=>{setStar(value)},time))
      }
  }
  return (
    <div className="judge-wrap">
     <div className="judge-top">
        <button>想看</button>
        <button>看过</button>
        <span>
        评价
        </span>
        <Rate value={star}  onHoverChange={(value)=>{debounceHover(value,200)}}/>
        <span>
          {desc[star-1]}
        </span>
     </div>
      <div className='judge-bottom' >
          <span ><img src={require("@/assets/short-comment.gif")} /><a href="#">写短评</a></span>
          <span><img src={require("@/assets/add-review.jpg")} /><a href="#">写影评</a></span>
          <span><img src={require("@/assets/add-doulist.jpg")} /><a href="#">提问题</a></span>
          <a href="#">分享到</a>
      </div>
  </div> 
  )
}
