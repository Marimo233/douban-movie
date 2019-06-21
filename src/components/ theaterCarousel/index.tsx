import React,{useState,useEffect,Fragment} from 'react'
import { Rate } from 'antd';
import Slider from "react-slick";

import './index.less'
import { sign } from 'crypto';

interface Props{
  dataList:Array<any>,
  isthreater:boolean
}

interface  sliderSetting{
  dots:boolean,
  infinite:boolean,
  speed:number,
  slidesToShow:number,
  slidesToScroll:number,
  nextArrow: any,
  prevArrow:any,
  beforeChange:any,
  autoPlay:boolean,
  autoplaySpeed:number,
  cssEase: string
}
interface arrowProps{
  Name?:string
  onClick?:any
}

interface dotsProps{
  dotNumber:number
}


//箭头前切换
const SlidePreArrow=(props:arrowProps)=>{
  const {onClick}=props
  return (
    <div className='prevArrow-wrap' onClick={onClick}>
      <a href="javascript:void(0)" className='prev-btn switch-btn'></a>
  </div>
  )
}
//箭头后切换
const SlideNextArrow=(props:arrowProps)=>{
  const {onClick}=props
  return (
    <div className='nextArrow-wrap' onClick={onClick}>
      <a href="javascript:void(0)" className='next-btn switch-btn'></a>
  </div>
  )
}
//圆点切换
const slideDots=(props:dotsProps)=>{
  const {dotNumber}=props
  return (
    <div className="dots-wraper">
      111111
    </div>
    )
}
export default function Carousel(props:Props) {
  let [page,setPage]=useState(1)
  const {dataList,isthreater}=props
//slide配置
const settings:sliderSetting = {
  dots: isthreater?false:true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow:<SlidePreArrow />,
  nextArrow: <SlideNextArrow />,
  autoPlay:true,
  autoplaySpeed:2000,
  cssEase: "linear",
  beforeChange:(prevPage:number,nextPage:number):void=>{
    console.log(nextPage)
    setPage(nextPage/5+1)
  }
};
const colNumber:number=Math.ceil(dataList.length/5)>2?Math.ceil(dataList.length/5):1
  return (
    <div>
       <div className="theaterContainer">
         <div className="theaterContainer-head">
           <b>正在热映</b><a>全部正在热映»</a><a>即将上映»</a>
            <i>{page}<span>/</span>{colNumber}</i>
         </div>
         <Slider {...settings}>
         {
           dataList.map((item,index)=>{
             return (
              <div key={item.id} className='post-wrap'>
                <div className='theaterPost'>
                  <img src={'https://images.weserv.nl/?url='+item.images.small.replace('https://','')} alt={item.title}/>
                </div>
                <h1><a href={item.alt}>{item.title}</a></h1>
                <div className="rates">{
                  item.rating.average===0
                  ? <span style={{fontSize:'12px',color:'#333'}}>暂无评分</span>
                  :<Fragment>
                    <Rate disabled value={Math.round(item.rating.average)/2} allowHalf /><span>{item.rating.average.toFixed(1)}</span>
                  </Fragment>

                }
                </div>
                <button><a href={`https://maoyan.com/query?kw=${item.title}`}>选座购票</a></button>
             </div>
             )
           })
         }
         </Slider>
       </div>
    </div>
  )
}
