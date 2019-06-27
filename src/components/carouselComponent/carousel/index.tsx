import React, { Children } from 'react'
import Slider from "react-slick";

import './index.less'
import {SlideNextArrow,SlidePreArrow} from '../Arrow'

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
  cssEase: string,
}

interface Props{
  changePage?:any,
  children:any,
  isHotList:boolean
}
export default function Carousel(props:Props) {
const {changePage,isHotList,children}=props
const settings:sliderSetting = {
  dots: !isHotList,
  infinite: true,
  speed: 1500,
  slidesToShow:1,
  slidesToScroll:1,
  prevArrow:<SlidePreArrow isHotList={isHotList}/>,
  nextArrow: <SlideNextArrow isHotList={isHotList} />,
  autoplay:false,
  autoplaySpeed:6000,
  cssEase: "linear",
  beforeChange:(prevPage:number,nextPage:number):void=>{
    if(changePage){
      nextPage/5+1===0?changePage(1):changePage(nextPage/5+1)
    }
    }
};
  return(
    <div>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  )
}
