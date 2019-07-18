import React,{useState,useEffect,Fragment} from 'react'

import './index.less'
import MovieCard from '../movieCard'
import Carousel from '../carouselComponent/carousel'
import {API,API_KEY}  from '../../request/api'
import {Get} from '../../request'
interface Props{
  ishotList:boolean,
  isMovie?:boolean,
  title?:any,
  isgallary?:boolean
}


export default function TheaterCarousel(props:Props) {
  const {ishotList,isMovie,isgallary}=props
  let [page,setPage]=useState(1)
  let [list,setList]=useState<Array<any>>([])
  let [title,setTitle]=useState([])
  const colums=ishotList?(isgallary?1:5):10
  //请求轮播图
  useEffect(()=>{
    const url=ishotList?
              isgallary?API.Gallary:API.HotShowing
              :API.Hot
    const param=ishotList?isgallary?{}:{params:{apikey: API_KEY}}
                :{
                  params:{
                    type: isMovie?'movie':'tv',
                    tag: '热门',
                    page_limit: 50,
                    page_start: 0
                  }
                }
    Get(url,param).then((resp:any)=>{
      const {subjects=Array(20)}=resp.data
      let temp=[];
    for(let i=0;i<subjects.length;i+=colums){
      temp.push(subjects.slice(i,i+colums))
    }
    setList(temp)
    })
  },[])
//请求标题
  useEffect(()=>{
    const url=API.HotTitle
    const param={
      params:{
        type: isMovie?'movie':'tv',
        tag: '热门',
        source:'index'
      }
    }
  Get(url,param).then((resp:any)=>{
    const {tags}=resp.data
    setTitle(tags)
  })
  },[])
  // 页数指示器切换
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
          {list.length>0&& <Carousel changePage={changePage} isHotList={ishotList}>
           {
             list.map((item:any,index:number)=>{
               return(
                 <div key={index}>
                   <div className='theaterContainer-wrap' >
                   {
                     item.map((k:any,kindx:number)=>{
                       return <MovieCard Info={k} isHotList={ishotList} key={k.id} index={kindx} isgallary={isgallary}/>
                     })
                   }
                   </div>
                 </div>
               )
             })
           }
         </Carousel>}
      </div>
  )
}
