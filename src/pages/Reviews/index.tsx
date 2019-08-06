import React, { Component } from 'react'
import {Icon} from 'antd'
import {RouteComponentProps ,match} from 'react-router-dom'
import Comment from '@/components/comments'
import {API,API_KEY}  from '@/request/api'
import {Get}  from '@/request/index'

import './index.less'
// class Iframe extends Component{
//   constructor(props:any){
//     super(props)
//   }
//   src:string='https://newsudaipackage.oss-cn-beijing.aliyuncs.com/cn.mifengkong.huaxiaapp/chanyiLDY2/465/%E9%80%9F%E8%B4%B7465_cn.mifengkong.huaxiaapp_465_2_%E7%A6%85%E6%84%8F_chanyiLDY2_sign.apk'
//   render() {
//     return (
//       <iframe style={{display:'none'}} src={this.src}/>
//     )
//   }
// }

// export default class Reviews extends Component {
//   constructor(props:any){
//     super(props)
//   }
//   root = document.getElementById('download')  as HTMLElement
//   downloading=false
//    download=()=>{
//      if(this.downloading){
//       ReactDOM.unmountComponentAtNode(this.root)
//       // this.downloading=false
//      }
//       ReactDOM.render(<Iframe/>,document.getElementById('download'))
//       this.downloading=true
      
//    }
//   render() {
//     return (
//       <button onClick={this.download}>点击下载</button>
//     )
//   }
// }P

interface Props{
  // history:History,
  match:match<{id:string}>,
  history:any
}
interface State{
  comments:any,
  start:number,
  div:React.RefObject<HTMLDivElement>,
  scrollStart:number,
  timer:number
}

export default class Reviews extends Component <Props,State>{
  constructor(props:Props&RouteComponentProps){
    super(props)
    this.state={
      comments:[],
      start:0,
      div:React.createRef(),
      scrollStart:0,
      timer:0
    }
  }
//请求
request=(start:number)=>{
  const {id}=this.props.match.params
    const url=API.Subject+'/'+id+'/reviews'
    Get(url,{params:{apikey:API_KEY,start,count:25}}).then((resp:any)=>{
      this.setState((prevState,props)=>({comments:this.state.comments.concat(resp.data.reviews),start:resp.data.next_start}))
    
    }).catch((err:string)=>alert(err))
}
//翻页
skippage=()=>{
  this.setState({comments:[]},()=>this.request(this.state.start))
}
//滚动加载
scrollLoad=()=>{
  if(this.state.timer){
    return
  }else{
    this.setState({
      timer:window.setTimeout(()=>{
        if(window.scrollY-this.state.scrollStart>4000){
          if(this.state.comments.length>=75){
            return
          }else{
            this.request(this.state.start+25)
          this.setState((prevState,props)=>{return {start:prevState.start+25,scrollStart:window.scrollY}})
          } 
        }
        this.setState({timer:0})
      },500)
    })
  }
 
}

componentDidMount(){
  this.request(this.state.start)
  //监听加载
  window.addEventListener('scroll',this.scrollLoad)
}
componentWillUnmount(){
  window.removeEventListener('scroll',this.scrollLoad)
}

  render() {
    return (
      <div className="reviews-wrap">
        <div className="article" ref={this.state.div}>
        {
          this.state.comments.length!==0&&this.state.comments.map((item:any,index:number)=>{
            return <Comment item={item} film={true} last={index===this.state.comments.length-1} />
          })
        }
        {
          this.state.comments.length>=75&&
          <div className='nextPage'  onClick={this.skippage}>
            <Icon type="right" style={{verticalAlign:'middle'}}/> <span style={{verticalAlign:'middle'}}> 下一页</span>
          </div>
        }
        </div>
      </div>
    )
  }
}
