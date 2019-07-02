import Home from './pages/Home/Home'
import Subject from './pages/Subject/index'
interface routes{
  url:string,
  key:number
  component:any
}

export const routers:Array<routes>=[
  {
    url:'/home',
    key:1,
    component:Home,
  },
  {
    url:'/subject/:id',
    key:2,
    component:Subject,
  }
]