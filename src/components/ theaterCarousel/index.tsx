import React,{useState} from 'react'
import Slider from "react-slick";

import './index.less'
import MovieCard from '../movieCard'

interface Props{
  dataList:Array<any>,
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
  autoplay:boolean,
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
  const {dataList}=props
//slide配置
const settings:sliderSetting = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow:<SlidePreArrow />,
  nextArrow: <SlideNextArrow />,
  autoplay:true,
  autoplaySpeed:6000,
  cssEase: "linear",
  beforeChange:(prevPage:number,nextPage:number):void=>{
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
                <MovieCard Info={item} key={item.id}/>
             )
           })
         }
         </Slider>
       </div>
    </div>
  )
}
