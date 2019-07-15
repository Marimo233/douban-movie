import Home from './pages/Home/Home'
import Subject from './pages/Subject/index'
import Reviews from './pages/Reviews/index'
interface routes{
  url:string,
  key:number
  component:any,
}

export const routers:Array<routes>=[
  {
    url:'/home',
    key:1,
    component:Home,
  },
  {
    url:'/subject/:id/review',
    key:2,
    component:Reviews,
  },
  {
    url:'/subject/:id',
    key:3,
    component:Subject
  }
]