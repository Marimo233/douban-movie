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
//最近热门标题
export function getHotTitle(params?:any) {
  return axios.get('/api/search_tags',params);
}
//最近热门
export function getHot(params?:any) {
  return axios.get('/api/search_subjects',params);
}
//推荐
export function getGallary(){
  return axios.get('/rap2/mock/223156/doubanMovie/gallery');
}
//评论
export function getRecomand(){
  return axios.get('/rap2/mock/223156/doubanmovie/recommand');
}