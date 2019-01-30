import axios from 'axios'
import { HOST_CONFIG as hostConfig } from './fetchConifg'
import LoadingLine from './loadingLine'
const loadingLine = new LoadingLine()

const { MOCK } = process.env
function dealRetCode(response) {
  const res = { err: null, data: response.data }
  return res
}
function onUploadProgress(p) {
  loadingLine.setWid((p.loaded / p.total)*100)
  console.log('onUploadProgress', p.loaded / p.total)
}
function fetchData(options) {
  const res = { err: null, data: '' }
  let { url } = options
  if (!url) {
    res.err = new Error('没有请求地址')
    return res
  }
  if (MOCK) {
    url = `http://67.209.187.22:3000/mock/15${url}`
  } else {
    const env = process.DEV
    url = `${hostConfig[env]}${url}`
  }
  console.log('options', options)
  options.url = url
  options.method = options.method || 'get'
  options.onUploadProgress = onUploadProgress
  options.onDownloadProgress = onUploadProgress
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  /* if(options.method.toLowerCase() === 'post') {
    options.headers = { 'Content-Type': 'multipart/form-data' }
    const formData = new FormData();
    const forDataKeys = Object.keys(options.data)
    forDataKeys.forEach((value) => {
      formData.append(value, options.data[value]);
    })
    options.data = formData
  } */
  return axios(options)
}

const doFetchData = function (options) {
  const res = { err: null, data: '' }
  console.log('options', options)
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


export default doFetchData

export {
  fetchData
}
