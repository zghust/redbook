import axios from 'axios'
import { getToken } from './storage'
// 1. 创建新的 axios 实例
const http = axios.create({
  baseURL: 'http://codercba.com:1888/api/',
})

// 2. 设置请求拦截器和响应拦截器
http.interceptors.request.use((config) => {
  if (config.url.indexOf('/my/') !== -1) {
    config.headers = {
      Authorization: getToken() || '',
    }
  }
  return config
})

http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // console.log('错了')
    return Promise.reject(error)
  }
)

// 3. 导出该 axios 实例
export default http
