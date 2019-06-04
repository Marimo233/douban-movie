import axios from 'axios'

const BASE_URL='/api/movie'
const API_KEY = "0b2bdeda43b5688921839c8ecb20399b";

declare global{
  interface Window{
    cancalXHRList:Array<any>
  }
}

function http():any{
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  window.cancalXHRList.push(source);
  let instance:any=axios.create({
    baseURL:BASE_URL,
    timeout:3e4,
    params:{
      'apikey':API_KEY
    },
    cancelToken:source.token
  })
  return instance
}

//热映
export function getHotShowing(params?: any){
  return http().get('/in_theaters',{
    params
  })
}