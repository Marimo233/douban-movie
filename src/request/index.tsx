import axios from "axios";


declare global {
  interface Window {
    cancalXHRList: any
  }
}

const BASE_URL = "/api/movie";
const API_KEY = "0b2bdeda43b5688921839c8ecb20399b";


window.cancalXHRList = [];

function http() {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  window.cancalXHRList.push(source);

  let instance: any = axios.create({
    baseURL: BASE_URL,
    timeout: 3e4,
    params: {
      apikey: API_KEY
    },
    cancelToken: source.token,
  });

  return instance;
}

// 热映
export function getHotShowing(params?:any) {
  return http().get("/in_theaters",{params});
}

// top250
export function getTop250(params?: any) {
  return http().get("/top250", {
    params,
  });
}

// 新片
export function getNew() {
  return http().get("/new_movies");
}

// 电影详情
export function getDetail(id: string) {
  return http().get(`/subject/${id}`);
}

// 北美票房榜
export function getGoodbox() {
  return http().get("/us_box");
}

// 搜索条目
export function getContentBySearch(str: string, params?: any) {
  return http().get(`/search?q=${str}`, {
    params
  });
}

// 口碑榜
export function getWeeklyMovie() {
  return http().get("/weekly");
}

export function getWallPaper() {
  return axios.get("/bing/HPImageArchive.aspx", {
    params: {
      format: "js",
      idx: 0,
      n: 1,
      mkt: "zh-CN",
    }
  });
}
