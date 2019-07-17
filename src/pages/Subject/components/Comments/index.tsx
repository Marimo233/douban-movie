import React,{useEffect,useState, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {API,API_KEY}  from '@/request/api'
import {Get}  from '@/request/index'
import Comment from '@/components/comments'
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
        !Loading&&comments.map((item:any,index:number)=>{
          return <Comment film={film} item={item} last={index===comments.length-1} key={item.id}/>
        })
      }
      {!Loading&&<p className='more-comments'> {film?<Link to={`/subject/${data.id}/review`} >更多影评{commentsData.total}篇</Link>:<a href='#'>更多短评{commentsData.total}条</a>}</p>}
      </div>
    </div>
  )
}
