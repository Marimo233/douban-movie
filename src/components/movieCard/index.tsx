import React ,{Fragment,useState,useEffect}from 'react'
import {Rate} from 'antd'

import HoverContent from '../hoverContent'
import './index.less'

interface Props{
  Info:any,
  key:string
}

export default function MovieCard(props:Props) {
  const [status,setStatus]=useState(false)

  const {Info}=props



  const changeStatus=()=>{
    // reru
    // if(status){
    //   clear
    // }
    // timer=setTimeout(()=>{setStatus(true)},800)
  }
  return (
    <div key={Info.id} className='post-wrap'>
    <div className='theaterPost' onMouseOver={changeStatus} onMouseLeave={()=>{ setStatus(false)}}>
      <img src={'https://images.weserv.nl/?url='+Info.images.small.replace('https://','')} alt={Info.title}/>
    </div>
    <h1><a href={Info.alt}>{Info.title}</a></h1>
    <div className="rates">{
      Info.rating.average===0
      ? <span style={{fontSize:'12px',color:'#333'}}>暂无评分</span>
      :<Fragment>
        <Rate disabled value={Math.round(Info.rating.average)/2} allowHalf />
        <span>{Info.rating.average.toFixed(1)}</span>
      </Fragment>
    }
    </div>
    <button><a href={`https://maoyan.com/query?kw=${Info.title}`}>选座购票</a></button>
    {
      status&&<HoverContent detail={Info}/>
    }
    </div>
  )
}
