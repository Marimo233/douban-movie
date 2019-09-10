import React ,{useState,FC}from 'react'
interface props{
  value:any,
  onChange:any
}
const Picture:FC<props>=(prop)=> {
  const [checkedID,setCheckedID]=useState(['5'])
  const [checkedAll,setCheckedAll]=useState(false)
  const {value,onChange}=prop
  const handleClick=(id:any)=>{
    const currentIndex = checkedID.indexOf(id)
    if(currentIndex>-1){
      setCheckedID(checkedID.slice(0, currentIndex).concat(checkedID.slice(currentIndex + 1)))
    }else{
      setCheckedID([...checkedID,id])
    }
    onChange(id)
  }
  const handleAll=()=>{
    if(!checkedAll){
      const list=checkedID
      value.map((item:any)=>{
        list.push(item.id)
      })
      setCheckedID(list)
      setCheckedAll(true)
    }else{
      setCheckedID(['5'])
      setCheckedAll(false)
    }
  }
  const arr1:any[]= [{"cluster1_pre": {"indexName": "cluster1_index", "indexId": 52, "tableDeployId": 74}},
  {"cluster1_pre": {"indexName": "cluster2", "indexId": 53, "tableDeployId": 74}},
  {"cluster1_pre": {"indexName": "cluster1_index", "indexId": 52, "tableDeployId": 74}}]
  const sort=function(){
   let  arr2=arr1.reduce(((temp:any,item:any)=>{
      
    }))
  }

  return (
    <div>

  <input type="checkbox" name="" id="" onClick={handleAll} />全选  
      {
        value&&value.map((item:any)=>{
          return <div className="img" onClick={()=>{handleClick(item.id)}} style={{float:'left',margin:'0 10px'}}>
            <img src={item.url} alt=""/>
            <p style={{color:checkedID.includes(item.id)?'red':''}}>{item.name}</p>
          </div>
        })
      }
    </div>
  )
}
export default Picture