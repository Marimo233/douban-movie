import React ,{Fragment,useState,useEffect,useRef}from 'react'
import ReactDom from 'react-dom'
import {Rate, Card} from 'antd'

import HoverContent from '../hoverContent'

import {API}  from '../../request/api.js'
import {Get} from '../../request'
import './index.less'

interface Props{
  Info:any,
  key:string|number,
  isHotList:boolean,
  index?:number,
  isgallary?:boolean
}
interface Position{
  x:number,
  y:number
}
export default function MovieCard(props:Props) {

  const card=useRef<HTMLDivElement>(null)
  const {Info,isHotList,index=0,isgallary}=props
  const root = document.getElementById('root')  as HTMLElement
  const [status,setStatus]=useState(false)
  const [timer,setTimer]=useState(false)
  const [pos,setPos]=useState<Position>({x:0,y:0})
  const [CardInfo,setCardInfo]=useState<Array<any>>([])
    //获取位置
const getPosition=()=>{
  if(card.current){
    const x=card.current.getBoundingClientRect().left+card.current.offsetWidth+5;
    const y=card.current.getBoundingClientRect().top;
    setPos({x,y})
  }
  
}
//请求Card数据
const requestCard=(id:string)=>{
  getPosition()
  if(CardInfo.length){
    setStatus(true)
    return
  }else{
    Get(API.Card,{params:{subject_id:id}}).then((resp:any)=>{
      const {subject}=resp.data
      CardInfo.push(subject)
      setCardInfo(CardInfo)
      setStatus(true)
    })
  }
  
}
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
  return (
    <Fragment>{
    //评论
    isgallary?
      <div key={Info.id} className='gallary-wrap'>
        <div className="gallary-img">
          <img src={Info.banner} alt=""/>
        </div>
        <div className='gallary-content'>
          <p className='gallary-title'>{Info.title}</p>
          <p className="gallary-detail">{Info.content}</p>
        </div>
      </div>
      //正在上映
    :isHotList?
    <div key={Info.id} className='post-wrap' ref={card} style={{marginRight:(index+1)%5!==0?'25px':''}}>
      <div className='theaterPost' onMouseEnter={()=>{setTimer(true)}} onMouseLeave={()=>{setTimer(false)}}>
        <img src={'https://images.weserv.nl/?url='+Info.images.small.replace('https://','')} alt={Info.title}/>
      </div>
      <h1><a href={Info.alt}>{Info.title}</a></h1>
      <div className="rates">{
        Info.rating.average===0
        ? <span style={{fontSize:'12px',color:'#333'}}>暂无评分</span>
        :<Fragment>
          <Rate disabled value={Math.round(Info.rating.average)/2} allowHalf/>
          <span>{Info.rating.average.toFixed(1)}</span>
        </Fragment>
      }
      </div>
      <button><a href={`https://maoyan.com/query?kw=${Info.title}`}>选座购票</a></button>
      {
        status?
        ReactDom.createPortal(<HoverContent detail={Info} pos={pos} isHotList={isHotList}/>,root)
        :null
      }
    </div>
    //热门
    :<div className='list-wrap' style={{marginRight:(index+1)%5!==0?'25px':'',marginBottom:Math.floor(index/5)===0?'10px':''}} ref={card}>
      <div className="listPost" onMouseEnter={()=>{requestCard(Info.id)}} onMouseLeave={()=>{setStatus(false)}}>
        <img src={Info.cover} alt={Info.title}/>
      </div>
      <p className="listTitle">
        {Info.is_new?<i/>:''}
        {Info.title}
        <strong>{Info.rate}</strong>
      </p>
      {
        status?
          ReactDom.createPortal(<HoverContent detail={CardInfo[0]} pos={pos} isHotList={isHotList}/>,root)
          :null
        }
    </div>
  }
  </Fragment>
 
  )
}
