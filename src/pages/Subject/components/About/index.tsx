import React,{Fragment} from 'react'

interface Props{
  data:any
}

export default function About(props:Props) {
  const {data}=props
  return (
    data&&
    <Fragment>
     
      <div className="subject-brief">
           <h1>{data.title}的剧情简介&nbsp;· &nbsp;· &nbsp;·&nbsp;·&nbsp; · &nbsp;·</h1>
           <p>
             {data.summary}
           </p>
         </div>
         <div className="subject-casts">
         <h1>{data.title}的演职员&nbsp;· &nbsp;· &nbsp;·&nbsp;·&nbsp; · &nbsp;·<a href="#">全部：{data.directors.length+data.casts.length}</a></h1>
         <div className="casts-img">
           {data.directors.map((item:any)=>{
             return <dl>
                <dt><img src={'https://images.weserv.nl/?url='+item.avatars.small.replace('http://','')} alt={item.name}/></dt>
                <dd>{item.name}</dd>
                <p>导演</p>
             </dl>
           })}
           {data.casts.map((item:any)=>{
             return <dl>
                <dt><img src={'https://images.weserv.nl/?url='+item.avatars.small.replace('http://','')} alt={item.name}/></dt>
                <dd>{item.name}</dd>
                <p>演员</p>
             </dl>
           })}
         </div>
        </div>
        <div className="subject-trailer">
          <h1>{data.title}的视频和图片
              <ul>
                （
                <li><a href="#">预告片{data.trailer_urls.length}</a></li><i>|</i>
                <li><a href="#">添加视频评论</a></li><i>|</i>
                <li><a href="#">图片{data.trailers.length} <span> &nbsp;·&nbsp; </span>添加</a></li>
              </ul>
          </h1>
          <ul>
            <li><video src={data.trailer_urls}></video><span>预告片</span></li>
            {
              data.trailers.map((item:any)=>{
                  return <li><img src={item.medium} alt=""/></li>
              })
            }
          </ul>
        </div>
    </Fragment>
  )
}
