import React,{useState, useEffect} from 'react'
import { Input } from 'antd';

import './index.less'
import TheaterCarousel from '../../components/theaterCarousel'
import ListCarousel from '../../components/listCarousel'
import {getHotShowing,getHotMovie} from '../../request'

const Search = Input.Search;
const Home:React.FC=()=> {
  
let [HotMovieList,setHotMovieList]=useState<Array<any>>([])
let [MovieList,setMovieList]=useState<Array<any>>([])

useEffect(()=>{
  getHotShowing({}).then((resp:any)=>{
    const {subjects}=resp.data
    setHotMovieList(subjects)
  })
},[])
useEffect(()=>{
  getHotMovie({}).then((resp:any)=>{
    const {subjects}=resp.data
    setMovieList(subjects)
  })
},[])


  return (
    <div>
      <header>
      <ul className='header-left'>
        <li><a href="">豆瓣</a></li>
        <li><a href="">读书</a></li>
        <li><a href="">电影</a></li>
        <li><a href="">音乐</a></li>
        <li><a href="">同城</a></li>
        <li><a href="">小组</a></li>
        <li><a href="">阅读</a></li>
        <li><a href="">FM</a></li>
        <li><a href="">时间</a></li>
        <li><a href="">豆品</a></li>
        <li><a href="">更多</a></li>
      </ul>
      <ul className='header-right'>
        <li><a href="#">下载豆瓣客户端</a></li>
        <li><a href="#">登录/注册</a></li>
      </ul>
      </header>
      <div className="search">
        <div className="top">
          <div className="wrap">
            <div className="logo"><a href="#"></a></div>
            <div className="input">
            <Search placeholder="搜索电影、电视剧呀、综艺、影人" onSearch={value => console.log(value)} enterButton />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="wrap">
            <ul>
              <li><a href="">影讯&amp;购票</a></li>
              <li><a href="">选电影</a></li>
              <li><a href="">电视剧</a></li>
              <li><a href="">排行榜</a></li>
              <li><a href="">分类</a></li>
              <li><a href="">影评</a></li>
              <li><a href="">2018年度榜单</a></li>
              <li><a href="">2018书影音报告</a></li>
            </ul>
          </div>
        </div>
          <a href="#" className='rank'></a>
      </div>
      <div className="content">
        <div className="wrap">
          <div className="content-left">
            <TheaterCarousel dataList={HotMovieList}/>
            <ListCarousel dataList={MovieList}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home

