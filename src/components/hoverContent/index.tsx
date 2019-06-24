import React from 'react'
import {Rate} from 'antd'

interface Props{
  detail:any
}

export default function index(props:Props) {
  const {detail}=props
  return (
    <div className="hover-content">
      <h1>{detail.title} <span>{detail.year}</span></h1>
      <div className="hover-rates">
      <Rate disabled value={Math.round(detail.rating.average)/2} allowHalf /><span>{detail.rating.average.toFixed(1)}</span> <i>{`(${detail.collect_count}人评价)`}</i>
      </div>
      <div className="time-local">
        <span>{detail.durations[0]}</span>
        <span>{detail.pubdates[0].match(/[\u4e00-\u9fa5]/).join()}</span>
      </div>
      <div className="directors">
        导演 <span>{detail.directors[0].name}</span>
      </div>
      <div className="casts">
        演员 <span>{detail.casts.map((i:any)=>{return i.name+'/'})}</span>
      </div>
    </div>
  )
}
