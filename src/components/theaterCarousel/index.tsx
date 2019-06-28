import React,{useState,useEffect,Fragment} from 'react'

import './index.less'
import MovieCard from '../movieCard'
import Carousel from '../carouselComponent/carousel'
interface Props{
  dataList:Array<any>,
  ishotList:boolean,
  isMovie?:boolean,
  title?:any,
  isgallary?:boolean
}


export default function TheaterCarousel(props:Props) {
  const {dataList,ishotList,isMovie,title,isgallary}=props
  let [page,setPage]=useState(1)
  let [list,setList]=useState(dataList)
  const colums=ishotList?(isgallary?1:5):10
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

const colNumber:number=list.length
  return (
       <div className="theaterContainer">
         <div className="carousel-title">
           {
            ishotList
            ?<div className="theaterContainer-head">
              {
                isgallary
                  ? <b>热门推荐</b>
                 :<Fragment>
                   <b>正在热映</b><a>全部正在热映»</a><a>即将上映»</a>
                 </Fragment>
              }
              <i>{page}<span>/</span>{colNumber}</i>  
            </div>
            :<div className="hot-title">
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
           }
         </div>
        <Carousel changePage={changePage} isHotList={ishotList}>
          {
            list.map((item:any,index:number)=>{
              return(
                <div className='theaterContainer-wrap' key={index}>
                  {
                    item.map((k:any,kindx:number)=>{
                      return <MovieCard Info={k} isHotList={ishotList} key={k.id} index={kindx} isgallary={isgallary}/>
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
