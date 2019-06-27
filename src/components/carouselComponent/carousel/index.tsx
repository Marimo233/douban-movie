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
  cssEase: string
}

interface Props{
  changePage?:any,
  children:any
}
export default function Carousel(props:Props) {
const {changePage}=props
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
    nextPage/5+1===0?changePage(1):changePage(nextPage/5+1)
  }
};
  return (
    <div>
      <Slider {...settings}>
          {props.children}
    </Slider>
    </div>
    
  )
}
