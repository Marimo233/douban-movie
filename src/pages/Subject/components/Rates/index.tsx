import React,{Fragment} from 'react'
import {Rate} from 'antd'

import './index.less'

interface Props{
  rating:any,
  ratings_count:number
}
const NumberPanel=(props:any)=>{
  const {details}=props
  let totalCounts=0
  Object.keys(details).forEach((item:string)=>{
    totalCounts+=details[item]
  })
  let domGroup=[]
for(let i=5;i>0;i--){
  let currRatio = parseFloat((details[i] * 100 / totalCounts).toString()).toFixed(1)
  let temp= 
         <div className='number-detail' key={i}>
          <span className='star-num'>{i}星</span>
          <span className='star-power' style={{ width: `${currRatio}px` }}></span>
          <span className='star-num'>{currRatio}%</span>
        </div>
  domGroup.push(temp)
}
return <Fragment>{domGroup}</Fragment> 
}
export default function Rates(props:Props) {
  const {rating,ratings_count}=props
  return (
    <div className="subject-rates">
      <h4>豆瓣评分</h4>
      <div className="rate-top">
      <div className="rates">
        <div className="average">
          {rating.average===0?'':rating.average.toFixed(1)}
        </div>
        <div className="detail">
          <Rate value={Math.round(rating.average)/2} allowHalf disabled/>
          <p>{rating.average===0?'暂无评价':`已有${ratings_count}人评价`}</p>
        </div>
      </div>
      <div className="rate-number">{
          rating.average===0?'' :<NumberPanel details={rating.details}/>
        }
        </div>
      </div>
      <div className="rate-bottom">
        <p>好于<span>88%的科幻片</span></p>
        <p>好于<span>91%的动作片</span></p>
      </div>
    </div>
  )
}
