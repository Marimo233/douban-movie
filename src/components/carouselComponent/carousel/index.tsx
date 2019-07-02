import React from 'react'
import Slider from "react-slick";

import './index.less'
import {SlideNextArrow,SlidePreArrow} from '../Arrow'

interface  sliderSetting{
  dots:boolean,
  speed:number,
  slidesToShow:number,
  slidesToScroll:number,
  nextArrow: any,
  prevArrow:any,
  beforeChange:any,
  autoplay:boolean,
  autoplaySpeed:number,
  infinite: boolean
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
  speed: 1500,
  slidesToShow:1,
  slidesToScroll:1,
  prevArrow:<SlidePreArrow isHotList={isHotList}/>,
  nextArrow: <SlideNextArrow isHotList={isHotList} />,
  autoplay:true,
  autoplaySpeed:6000,
  infinite: true,
  beforeChange:(prevPage:number,nextPage:number):void=>{
    if(changePage){
      changePage(nextPage+1)
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
