import React,{useState} from 'react'

import './index.less'
import MovieCard from '../movieCard'
import Carousel from '../carouselComponent/carousel'
interface Props{
  dataList:Array<any>,
}


export default function TheaterCarousel(props:Props) {
  let [page,setPage]=useState(1)
  const {dataList}=props
  const changePage=(page:number):void=>{
    setPage(page)
  }

const colNumber:number=Math.ceil(dataList.length/5)>2?Math.ceil(dataList.length/5):1
  return (
       <div className="theaterContainer">
         <div className="theaterContainer-head">
           <b>正在热映</b><a>全部正在热映»</a><a>即将上映»</a>
            <i>{page}<span>/</span>{colNumber}</i>
         </div>
         <Carousel changePage={changePage}>
              {
                dataList.map((item)=>{
                  return <MovieCard Info={item} key={item.id}/>
                })
              }
            </Carousel>
       </div>
  )
}
