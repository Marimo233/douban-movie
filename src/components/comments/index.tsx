import React, { Component,Fragment } from 'react'
import {Rate,Icon} from 'antd'
import './index.less'

interface Props{
  item:any,
  film:boolean,
  last:boolean
}
interface State{
  fold:boolean
}

export default class Comment extends Component <Props,State>{
  constructor(props:Props){
    super(props)
    this.state={
      fold:props.item.content.length>180
    }
  }
 scrollContent=()=>{
   this.setState((prevState,props)=>({fold:!prevState.fold}))
}
  render() {
    const {item,film,last}=this.props
    return (
      <div className="comment" key={item.id} style={{borderBottom:last?'none':'1px solid rgba(221,221,221,0.5)'}}>
          <div className="top">
           { film?<img src={item.author.avatar} alt=""/>:''}
            <a href="#">{item.author.name}</a>
            看过
            <Rate value={item.rating.value} />
            <span>{film?item.created_at:item.created_at.replace(/\s(\d{2}\:){2}\d{2}$/g,'') }</span>
            {film?'':<b>{item.useful_count}<a href='#'>有用</a></b>}
          </div>
          <div className="content">
            {film?<p className='title'> <a href="#">{item.title}</a></p>:''}
            <div className="content-detail" >{
              this.state.fold
              ?<Fragment>{item.content.slice(0,180)+'...'}<span onClick={this.scrollContent}>(展开)</span></Fragment> 
              :item.content.length>180
                ?<Fragment>{item.content.split('\n').map((str:string)=><p style={{marginBottom:'20px'}}>{str}</p>)}<span onClick={this.scrollContent}>(收起)</span></Fragment>
                :item.content}
            </div>
          </div>
          {
            film?<div className="support-btn">
            <a className='btn'><Icon type="up" />{item.useful_count}</a>
            <a className='btn'><Icon type="down" />{item.useless_count}</a>
            <a href="#">{item.comments_count}回应</a>
          </div>:''
          }
          
          </div>
    )
  }
}
