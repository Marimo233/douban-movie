import React,{useState,useEffect} from 'react'

import './index.less'
import MovieCard from '../movieCard'
import Carousel from '../carouselComponent/carousel'
import { isMethod } from '@babel/types';
interface Props{
  dataList:Array<any>,
  ishotList:boolean,
  isMovie?:boolean,
  title?:any
}


export default function TheaterCarousel(props:Props) {
  const {dataList,ishotList,isMovie,title}=props
  let [page,setPage]=useState(1)
  let [list,setList]=useState(dataList)
  const colums=ishotList?5:10
  useEffect(()=>{
    let temp=[];
    for(let i=0;i<dataList.length;i+=colums){
      temp.push(dataList.slice(i,i+colums))
    }
    setList(temp)
  },[dataList])
  const changePage=(page:number):void=>{
    setPage(page)
  }

const colNumber:number=Math.ceil(dataList.length/5)>2?Math.ceil(dataList.length/5):1

  return (
    ishotList?
       <div className="theaterContainer">
         <div className="theaterContainer-head">
           <b>正在热映</b><a>全部正在热映»</a><a>即将上映»</a>
            <i>{page}<span>/</span>{colNumber}</i>
         </div>
         <Carousel changePage={changePage} isHotList={ishotList}>
         {
               list&&list.map((item:any,index:number)=>{
                 return(
                   <div className='theaterContainer-wrap' key={index}>
                      {
                        item.map((k:any,kindx:number)=>{
                         return <MovieCard Info={k} isHotList={ishotList} key={k.id} index={kindx}/>
                        })
                      }
                   </div>
                 )
               })
             }
            </Carousel>
       </div>
    :    <div className="listContainer">
    <div className="hot-title">
         {isMovie?<b>最近热门电影</b>:<b>最近热门电视剧</b>}
         <ul>
           {
             title.map((item:any,index:number)=>{
               return <li key={item} className={index===0?'active-li':''}>{item}</li>
             })
           }
         </ul>
         <a href="#">更多»</a>
     </div>
     <Carousel isHotList={false}>
        {
          list&&list.map((item:any,index:number)=>{
            return(
              <div className='listContainer-wrap' key={index}>
                 {
                   item.map((k:any,kindx:number)=>{
                    return <MovieCard Info={k} isHotList={false} key={k.id} index={kindx}/>
                   })
                 }
              </div>
            )
          })
        }
   </Carousel>
  </div>

  )
}
