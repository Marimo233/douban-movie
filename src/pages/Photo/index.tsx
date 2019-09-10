import React,{useState} from 'react'
import Picture from './component'
import { Checkbox } from 'antd'
const Photo:React.FC=()=> {
  const [value,setValue]=useState('1')
  console.log(value)
  const pictures=[
    {
      id:'1',
      name:'a',
      url:'https://oss-image.mifengkong.cn/fr_public_6666/_22849e7c7dc58ec996fe480502ebb83e.png'
    },
    {
      id:'2',
      name:'b',
      url:'https://oss-image.mifengkong.cn/fr_public_6666/_22849e7c7dc58ec996fe480502ebb83e.png'
    },
    {
      id:'3',
      name:'c',
      url:'https://oss-image.mifengkong.cn/fr_public_6666/_22849e7c7dc58ec996fe480502ebb83e.png'
    }
  ]
  return (
    <div>
      <Picture value={pictures} onChange={(value:any)=>{setValue(value)}}/>
    </div>
    
  )
}
export default Photo