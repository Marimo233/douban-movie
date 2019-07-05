import React,{useEffect,useState} from 'react'
import {Rate} from 'antd'

import {API,API_KEY}  from '@/request/api'
import {Get}  from '@/request/index'

interface Props{
  data:any
}

export default function Comments(props:Props) {
  const [comments,setComments]=useState()
  const {data}=props
  useEffect(()=>{
    const url=API.Subject+'/'+data.id+`/comments`
    Get(url,{params:{apikey:API_KEY}}).then((resp:any)=>{
        setComments(resp.data.comments)
    })
  },[])

  return (
    <div className='comments-wrap'>
      <h1>{data.title}的短评&nbsp;· &nbsp;· &nbsp;·&nbsp;·&nbsp; · &nbsp;·<a href="#">(全部{data.comments_count}条)</a></h1>
      <h2 className="comments-catalog">
        热门<span>/</span><a href="#">最新</a><span>/</span><a href="#">好友</a>
      </h2>
      {
        comments&&comments.map((item:any)=>{
          console.log(typeof item.created_at)
          return <div className="comment" key={item.id}>
          <div className="top">
            <a href="#">{item.author.name}</a>
            看过
            <Rate value={item.rating.value} />
            <span>{ }</span>
          </div>
          </div>
        })
      }
      
    </div>
  )
}
