import React, { Component } from 'react'

import ReactDOM from 'react-dom';

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
// }
export default class Reviews extends Component {
  constructor(props:any){
    super(props)
  }
  render() {
    return (
      <button >点击下载</button>
    )
  }
}
