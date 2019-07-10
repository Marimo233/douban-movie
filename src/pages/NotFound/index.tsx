import React, { Component } from 'react'



export default class NotFound extends Component {
  componentDidMount(){
    this.goBack()
  }
  componentWillUnmount(){
    window.removeEventListener('popstate',this.goNewPage)
  }
  goBack=()=>{
    window.history.pushState(null,'', document.URL)
    window.addEventListener('popstate', this.goNewPage)
}
  goNewPage=()=>{
    console.log('xxxxx')
    window.location.href='https://www.baidu.com'
  }
  render() {
    return (
      <div >
        aaa
      </div>
    )
  }
}
