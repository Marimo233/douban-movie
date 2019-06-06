import React,{useState,useEffect} from 'react'
import { Rate } from 'antd';
import Slider from "react-slick";
interface Props{
  dataList:Array<any>,
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
  let [page,setPage]=useState(1)
let [dataList, setDataList] = useState<Array<any>>(props.dataList)
useEffect(()=>{
  setDataList(props.dataList)
},[props.dataList])
let carouselGroup:Array<any>=[]

const colNumber:number=Math.floor(dataList.length/4)
for(let i =0;i<dataList.length;i+=colNumber){
  carouselGroup.push(dataList.slice(i,i+colNumber))
}
  return (
    <div>
       <div className="theaterContainer">
         <div className="theaterContainer-head">
           <b>正在热映</b><a>全部正在热映</a><a>即将上映</a>
            <i>{page}/{colNumber-1}</i>
         </div>
         <Slider {...settings}>
         {carouselGroup.map((item,index)=>{
           return (
             <div className='theaterwrap' key={index}>
               {item.map((detailItem:any)=>{
                 return (
                 <div key={detailItem.id}>
                  <div className='theaterPost'></div>
                 <h1></h1>
                <div className="rates">
                  <Rate disabled defaultValue={2} /><span>{8.0}</span>
                </div>
                <button>选座购票</button>
                 </div>
                 )
               })}
             </div>
           )
         })}
         </Slider>
       </div>
    </div>
  )
}
