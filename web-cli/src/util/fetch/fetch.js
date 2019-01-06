import axios from 'axios'
import { HOST_CONFIG as hostConfig } from './fetchConifg'

// 模拟环境变量
const process = {}

function dealRetCode(response) {
  const res = { err: null, data: response.data }
  return res
}
function fetchData(options) {
  const res = { err: null, data: '' }
  let { url } = options
  if (!url) {
    res.err = new Error('没有请求地址')
    return res
  }
  if (process.Mock) {
    url = `http://67.209.187.22:3000/mock/15${url}`
  } else {
    const env = process.DEV
    url = `${hostConfig[env]}${url}`
  }
  options.url = url
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
/*  if (options.method.toLowerCase() === 'post') {
    options.headers = { 'Content-Type': 'multipart/form-data' }
    const formData = new FormData();
    const forDataKeys = Object.keys(options.data)
    forDataKeys.forEach((value) => {
      formData.append(value, options.data[value]);
    })
    options.data = formData
  }*/
  return axios(options)
}

const doFetchData = function (options) {
  const res = { err: null, data: '' }
  return new Promise((resolve) => {
    fetchData(options)
      .then((response) => {
        const result = dealRetCode(response.data)
        if(result.err) {
          res.err = result.err
          resolve(res)
          return
        }
        res.data = result.data
        resolve(res)
      })
      .catch((err) => {
        resolve({ err, data: '' })
      })
  })
}


export default {
  doFetchData
}

export {
  fetchData
}
