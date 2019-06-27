import axios from "axios";


declare global {
  interface Window {
    cancalXHRList: any
  }
}

// const BASE_URL = "/api/movie";
const API_KEY = "0b2bdeda43b5688921839c8ecb20399b";


window.cancalXHRList = [];

function http() {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  window.cancalXHRList.push(source);

  let instance: any = axios.create({
    timeout: 3e4,
    cancelToken: source.token,
  });

  return instance;
}

// 热映
export function getHotShowing(params?:any) {
  return http().get("/test/movie/in_theaters",{params:{apikey: API_KEY}});
}
//最近热门电影
export function getHotMovie(params?:any) {
  return axios.get('/api/search_subjects',{params:{
    type: 'movie',
    tag: '热门',
    page_limit: 50,
    page_start: 0
  }});
}
//最近热门电影标题
export function getHotMovieTitle(params?:any) {
  return axios.get('/api/search_tags',{params:{
    type: 'movie',
    tag: '热门',
    source:'index'
  }});
}