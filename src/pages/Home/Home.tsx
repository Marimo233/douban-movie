import React,{useState, useEffect} from 'react'


import './index.less'
import TheaterCarousel from '../../components/theaterCarousel'
import Recommand from '../../components/recommand'

import {API,API_KEY}  from '../../request/api'
import {Get} from '../../request'

const Home:React.FC=(props:any)=> {
let [BillbordList,setBillbord]=useState<Array<any>>([])
//口碑
useEffect(()=>{
  const url=API.Billbord
  Get(url,{params:{apikey: API_KEY}}).then((resp:any)=>{
    setBillbord(resp.data.subjects)
  })
},[])
  return (
    <div>
      <div className="content">
        <div className="wrap">
          <div className="content-left">
            <TheaterCarousel ishotList={true} isgallary={false}/>
            <TheaterCarousel  ishotList={false} isMovie={true}/>
            <TheaterCarousel ishotList={false} isMovie={false}/>
            <TheaterCarousel ishotList={true} isgallary={true}/>
            <Recommand />
          </div>
          <div className="content-right">
            <div className="answer">
              <a href="#">豆瓣电影评分八问</a>
            </div>
            <div className="movie-activity">
                <div className="activity-title">
                  电影活动 &nbsp; · &nbsp;·&nbsp; ·&nbsp; ·&nbsp; · &nbsp;· 
                </div>
                <ul>
                  <li>
                  <a href="https://www.douban.com/doubanapp/dispatch?uri=/niffler/column/157" data-bid="2746" target="_blank">电影声音的魔盒 | 好莱坞声音设计大师课</a>
                </li>
                <li>
                   <a href="https://bizpage.douban.com/hollywood-producer/" data-bid="2735" target="_blank">招募 | 好莱坞制片人电影商务交流之旅</a>
                </li>
              </ul>
            </div>
            <div className="billboard">
              <h2>一周口碑榜 <a href="#">更多榜单»</a></h2>
              <ul>
                {
                  BillbordList.map((item,index)=>{
                    const {subject}=item
                    return(
                      <li>
                      <span>{index+1}</span><a href={subject.alt}>{subject.title}</a></li>
                    )
                  })
                }
              </ul>
            </div>
            <div id="doulist">
              <h2>热门豆列</h2>
                <ul>
                    <li>
                    <span>15推荐</span>
                    <div className="title"><a target="_blank" href="https://www.douban.com/doulist/2540888/">小众迷你罪案剧</a></div>
                    </li>
                    <li>
                    <span>15推荐</span>
                    <div className="title"><a target="_blank" href="https://www.douban.com/doulist/1545747/">这些年，我看过的les片(不断更新中）</a></div>
                    </li>
                  </ul>
            </div>
            <div className="contact-and-cooperation">
              <h2>合作联系</h2>
              <ul>
                    <li>电影合作邮箱：<img src="https://img3.doubanio.com/f/movie/c858df348b4d199c848774ed1b3ed529052f0fa1/pics/movie/email_movie.png"/></li>
                    <li>电视剧合作邮箱：
                        <img src="https://img3.doubanio.com/f/movie/4de38ce91fdad7bcf3246c2594c84fa800eba08a/pics/movie/email_tv.png"/>
                        <img src="https://img3.doubanio.com/f/shire/486503da8c82ffdbecec41c065927f96cbf02e4f/pics/icon/ic_new.png" className="new"/>
                    </li>
                    <li>豆瓣影人PRO合作邮箱：<img src="https://img3.doubanio.com/f/movie/51a921a21ca8b612d586d37d3eb122e583a20d67/pics/movie/email_pro.png"/></li>
              </ul>
            </div>
            <div className="contact-mod">
              <h2>关注我们</h2>
              <ul className="embassy-list clearfix">
                  <li>
                      <a href="https://weibo.com/doubanfilm" target="_blank" className="icon-embassy-weibo"></a>
                      <a href="https://weibo.com/doubanfilm" target="_blank" className="primary-link">微博</a>
                  </li>
                  <li>
                      <a className="icon-embassy-weixin">
                          <div className="hover"><img src="https://img3.doubanio.com/f/movie/2e2ea342f4f4590300de32c5f30a9184176b3541/pics/movie/home_wechat_qrcode@2x.jpg"/></div>
                      </a>
                      <a className="primary-link" href="javascript:;">微信</a>
                  </li>
                  <li>
                      <a href="https://weibo.com/doubanzui" target="_blank" className="icon-embassy-bite-me"></a>
                      <a href="https://weibo.com/doubanzui" target="_blank" className="primary-link">瓣嘴</a>
                  </li>
                  <li>
                      <a href="https://www.douban.com/people/186015655/" target="_blank" className="icon-embassy-film-pro"></a>
                      <a href="https://www.douban.com/people/186015655/" target="_blank" className="primary-link">豆瓣影人PRO</a>
                  </li>
                  <li>
                      <a href="https://www.douban.com/people/nobodyfilm/" target="_blank" className="icon-embassy-club-site"></a>
                      <a href="https://www.douban.com/people/nobodyfilm/" target="_blank" className="primary-link">观影club</a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home

