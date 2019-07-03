import React,{Fragment} from 'react'

import './index.less'

interface Props{
  directors:any,
  writers:any,
  casts:any,
  genres:any,
  countries:any,
  languages:any,
  pubdates:any,
  durations:string,
  aka:any,
  episodes_count:string
}

export default function Info(props:Props) {
  const {directors,writers,casts,genres,countries,languages,pubdates,durations,aka,episodes_count}=props

  const Datamap=(data:any,link:boolean)=>{
    return data.map((item:any,index:number)=>{
      return<Fragment>
            {index===0?'':<span>/</span>}
            {link?<a href={item.alt} key={item.id}>{item.name}</a>:<span>{item}</span>}
        </Fragment>
    })
}
  return (
    <div className="info">
    <p>导演：{Datamap(directors,true)}</p>
    <p>编剧：{Datamap(writers,true)}</p>
    <p>演员：{Datamap(casts,true)}</p>
    <p>类型：{Datamap(genres,false)}</p>
    <p>制片国家/地区：{Datamap(countries,false)}</p>
    <p>语言：{Datamap(languages,false)}</p>
    <p>上映日期：{Datamap(pubdates,false)}</p>
    {
      episodes_count?<p>集数：{episodes_count}</p>:''
    }
    <p>片长：{Datamap(durations,false)}</p>
    {
      aka.length?<p>又名：{Datamap(aka,false)}</p>:''
    }
 </div>
  )
}
