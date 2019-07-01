import axios from "axios";


declare global {
  interface Window {
    cancalXHRList: any
  }
}

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
export const Get=function(api:string,params:any){
  return http().get(api,params)
}