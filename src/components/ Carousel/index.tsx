import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
interface Props{
  dataList:Array<any>
}

interface  sliderSetting{
  dots:boolean,
  infinite:boolean,
  speed:number,
  slidesToShow:number,
  slidesToScroll:number
}

const settings:sliderSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function Carousel(props:Props) {
  
let [dataList, setdataList] = useState(props.dataList)



  return (
    <div>
     <Slider {...settings}>

     </Slider>
    </div>
  )
}
