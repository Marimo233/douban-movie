import React,{useState,useEffect} from 'react'
import {Rate} from 'antd'

import './index.less'
import {getRecomand} from '../../request'

export default function Recommand() {
  let [list,setList]=useState<Array<any>>([])
  useEffect(()=>{
    getRecomand().then((resp)=>{
      const {data}=resp.data
      setList(data)
    })
  },[])
  return (
    <div className='recommand-wrap'>
      <div className="recommand-title">
        <b>最受欢迎的影评</b>
        <a href="#">更多热门影评</a>
        <a href="#">新片影评</a>
      </div>
      {
        list.map((item)=>{
          return  <div className="recommand-content">
          <div className="recommand-post">
            <img src={item.post} alt={item.title}/>
          </div>
          <div className="recommand-detail">
            <div className="recommand-detail-title">
              {item.title}
            </div>
            <p className="user">
              {item.name}
              <span>评论</span>
              <i>
              {item.movie_title}
              </i>
              <Rate value={Math.round(item.rates)/2} disabled allowHalf/>
            </p>
            <p className='recommand-detail-word'>
              {item.detail}
              <a href="#">(全文)</a>
            </p>
          </div>
        </div>
        })
      }
    </div>
  )
}
