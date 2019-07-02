import React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import { Input } from 'antd';
import './App.less'
import {routers} from './routes'
import NotFound from './pages/NotFound'
const Search = Input.Search;
const App: React.FC = () => {
  return (
    <div className="App">
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
      
     <BrowserRouter>
      <Switch>
        {
          routers.map((item:any)=>{return <Route path={item.url} component={item.component} key={item.key}/>})
        }
        <Redirect to='/home' from='/' exact />
        <Route path='/404' component={NotFound} exact/>
        <Redirect to='/404'/>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
