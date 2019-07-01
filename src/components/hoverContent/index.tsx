import React,{Fragment} from 'react'
import {Rate} from 'antd'

import './index.less'

interface Props{
  detail:any,
  pos:any,
  isHotList:boolean
}

export default function index(props:Props) {
  const {detail,isHotList}=props
  return (
  
    <div className="hover-content" style={{left:props.pos.x+'px',top:props.pos.y+'px'}}>
    {
      isHotList?
      <div className='HotList-Card'>
        <h1>{detail.title} <span>{detail.year}</span></h1>
      <div className="hover-rates">
      <Rate disabled value={Math.round(detail.rating.average)/2} allowHalf /><span>{detail.rating.average.toFixed(1)} <i>{`(${detail.collect_count}人评价)`}</i></span>
      </div>
      <div className="time-local">
        <span>{detail.durations[0]}</span>
        <span>{detail.pubdates[0].match(/[\u4e00-\u9fa5]/g).join('')}</span>
      </div>
      <div className="directors">
        导演 <span>{detail.directors[0].name}</span>
      </div>
      <div className="casts">
        演员 <span>{
          detail.casts.map((i:any)=>{return i.name}).join('/')
          }</span>
      </div>
      </div>
      :<div className='Hot-card'>
        <h1>{detail.title}</h1>
        <div className="rates">
        <Rate disabled value={Math.round(detail.rate)/2} allowHalf /><span>{Number(detail.rate).toFixed(1)}</span>
        </div>
        <div className="casts">
          {detail.playable?<span className='special'>可播放</span>:''}
          <span>{detail.duration}</span>
          {detail.is_tv?<span>{detail.episodes_count}集</span>:''}
          {
            detail.types.map((item:string)=>{
              return <span>{item}</span>
            })
          }
          <span>{detail.directors[0]}(导演)</span>
          {
            detail.actors.slice(0,3).map((item:string)=>{
              return <span>{item}</span>
            })
          }
        </div>
        <div className="btn-group">
          <button>在看</button>
          <button>想看</button>
          <button>看过</button>
        </div>
        <div className="short_comment">
          {detail.short_comment.content} <span>-{detail.short_comment.author}</span>
        </div>
      </div>
    }
    </div>
  )
}
