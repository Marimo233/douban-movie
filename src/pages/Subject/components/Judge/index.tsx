import React ,{useState}from 'react'
import {Rate} from 'antd'
import './index.less'

export default function Judge() {
  const [star,setStar]=useState(0)
  const desc=['很差', '较差','还行','推荐','力荐']
  return (
    <div className="judge-wrap">
      <div>
        
      </div>
    <button>想看</button>
    <button>看过</button>
    <span>
     评价
    </span>
    <Rate value={star} onChange={(value)=>{setStar(value)}}/>
    <span>
      {desc[star-1]}
    </span>
  </div>
  )
}
