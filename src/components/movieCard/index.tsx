import React ,{Fragment,useState,useEffect,useRef}from 'react'
import ReactDom from 'react-dom'
import {Rate, Divider} from 'antd'

import HoverContent from '../hoverContent'
import './index.less'

interface Props{
  Info:any,
  key:string,
}
interface Position{
  x:number,
  y:number
}
export default function MovieCard(props:Props) {
  const [status,setStatus]=useState(false)
  const [timer,setTimer]=useState(false)
  const [pos,setPos]=useState<Position>({x:0,y:0})
  const card=useRef<HTMLDivElement>(null)
  const {Info}=props
  const root = document.getElementById('root')  as HTMLElement

  useEffect(()=>{
    let timeout:any
    if(timer){
       timeout=setTimeout(()=>{
        getPosition()
        setStatus(true)},800)
    }else{
      setStatus(false)
    }
    return ()=>{clearTimeout(timeout)}
  },[timer])
  //获取位置
const getPosition=()=>{
  if(card.current){
    const x=card.current.getBoundingClientRect().left+card.current.offsetWidth+5;
    const y=card.current.getBoundingClientRect().top;
    setPos({x,y})
  }
  
}
  return (
    <div key={Info.id} className='post-wrap' ref={card}>
      <div className='theaterPost' onMouseEnter={()=>{setTimer(true)}} onMouseLeave={()=>{setTimer(false)}}>
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
        status?
        ReactDom.createPortal(<HoverContent detail={Info} pos={pos}/>,root)
        :null
      }
    </div>
  )
}
