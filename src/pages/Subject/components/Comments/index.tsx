import React,{useEffect,useState, Fragment} from 'react'
import {Rate,Icon} from 'antd'

import {API,API_KEY}  from '@/request/api'
import {Get}  from '@/request/index'
import './index.less'
interface Props{
  data:any,
  film:boolean
}

export default function Comments(props:Props) {
  const [commentsData,setCommentsData]=useState()
  const [comments,setComments]=useState()
  const [Loading,setLoading]=useState(true)
  const {data,film}=props
  useEffect(()=>{
    const comment=film?'/reviews':`/comments`
    const url=API.Subject+'/'+data.id+comment
    Get(url,{params:{apikey:API_KEY}}).then((resp:any)=>{
        setCommentsData(resp.data)
        if(resp.data.comments){
          setComments(resp.data.comments)
        }else{
          setComments(resp.data.reviews)
        }
        setLoading(false)
    })
  },[])


  return (
    <div className='comments-wrap'>
      <div className="short-comment">
      <h1>{data.title}的{film?'影评':'短评'}&nbsp;· &nbsp;· &nbsp;·&nbsp;·&nbsp; · &nbsp;·<span >(全部{data.comments_count}条)</span> <a href="#"> <span>我要写{film?'影评':'短评'}</span></a></h1>
      <h2 className="comments-catalog">
        热门<span>/</span><a href="#">最新</a><span>/</span><a href="#">好友</a>
      </h2>
      {
        !Loading&&comments.map((item:any)=>{
          return <div className="comment" key={item.id}>
          <div className="top">
           { film?<img src={item.author.avatar} alt=""/>:''}
            <a href="#">{item.author.name}</a>
            看过
            <Rate value={item.rating.value} />
            <span>{film?item.created_at:item.created_at.replace(/\s(\d{2}\:){2}\d{2}$/g,'') }</span>
            {film?'':<em>{item.useful_count}<a href='#'>有用</a></em>}
          </div>
          <div className="content">
            {film?<p className='title'> <a href="#">{item.title}</a></p>:''}
            {item.content.length>=180?<Fragment>{item.content.slice(1,180)+'...'}<span>(展开)</span></Fragment> :item.content}
          </div>
          {
            film?<div className="support-btn">
            <button><Icon type="up" />{item.useful_count}</button>
            <button><Icon type="down" />{item.useless_count}</button>
            <a href="#">{item.comments_count}回应</a>
          </div>:''
          }
          
          </div>
        })
      }
      {!Loading&&<p> <a href='#'>>更多短评{commentsData.total}条</a></p>}
      </div>
    </div>
  )
}
