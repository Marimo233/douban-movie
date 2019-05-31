import Home from './pages/Home/Home'

interface routes{
  url:string,
  key:number
  component:any
}

export const routers:Array<routes>=[
  {
    url:'./home',
    key:1,
    component:Home,
  }
]