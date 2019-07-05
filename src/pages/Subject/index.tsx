import React,{useState,useEffect,Fragment} from 'react'

import {API,API_KEY} from '../../request/api'
import {Get} from '../../request/index'
import Info from './components/Info'
import Rates from './components/Rates'
import Judge from './components/Judge'
import About from './components/About'
import Comments from './components/Comments'
import './index.less'
export default function Subject(props:any) {
  const [data,setData]=useState<any>({})
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    const {id}=props.match.params
    const url=API.Subject+`/${id}`
    Get(url,{params:{apikey:API_KEY}}).then((resp:any)=>{
      setData(resp.data)
      setLoading(false)
    })
  },[])

 
  return (
    !loading?
    <div className='subject-info'>
     <h1>{data.title} <span>({data.year})</span> </h1>
     <div className="article">
       <div className="content">
         <div className="subject-wrap">
           <div className="subject">
             <div className="post">
               <img src={'https://images.weserv.nl/?url='+data.images.small.replace('http://','')}  alt={data.title}/>
             </div>
             <Info 
                directors={data.directors}
                writers={data.writers}
                casts={data.casts}
                genres={data.genres}
                countries={data.countries}
                languages={data.languages}
                pubdates={data.pubdates}
                durations={data.durations}
                aka={data.aka}
                episodes_count={data.episodes_count}
              />
           </div>
            <Rates rating={data.rating} ratings_count={data.ratings_count}/>
         </div>
         <Judge/>
         <About data={data}/>
         <Comments data={data}/>
       </div>
     </div>
    </div>
    :''
  )
}
