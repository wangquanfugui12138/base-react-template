import axios from 'axios';
import { message } from 'antd';

// 请求列表
const requestList = []
// 取消列表
const CancelToken = axios.CancelToken
let sources = {}

// 拦截请求
axios.interceptors.request.use(config => {
  const request = config.data ? (JSON.stringify(config.url) + JSON.stringify(config.data)) : JSON.stringify(config.url)

  config.cancelToken = new CancelToken((cancel) => {
    sources[request] = cancel
  })
  //判断请求是否已存在请求列表，避免重复请求，将当前请求添加进请求列表数组；
  if (requestList.includes(request)) {
    sources[request](`${request} is repeat`)
  } else {
    requestList.push(request)
  }
  return config
}, err => {
  message.error('请求失败')
  return Promise.reject(err)
})

//拦截响应
axios.interceptors.response.use(
  config => {
    config.data.success !== undefined && !config.data.success && message.error('响应失败')
    return config.data
  },
  err => {
    if (err.message.indexOf('repeat') !== -1) {
      console.log(err.message)
      return
    }

    message.error('响应失败')
    return Promise.reject(err)
  }
)