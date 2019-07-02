import React,{useEffect} from 'react'
import {API,API_KEY} from '../../request/api'
import {Get} from '../../request/index'
export default function Subject(props:any) {
  useEffect(()=>{
    const {id}=props.match.params
    const url=API.ShortCommands+`/${id}/comments`
    Get(url,{params:{apikey:API_KEY}}).then((resp:object)=>{
      console.log(resp)
    })
  })
  return (
    <div>
      aaa
    </div>
  )
}
