function isNoTrim(val) {
  return val && val.trim()
}
function isw(val) {
  const reg = (/\W/g).test(val)
  return !reg
}
function isNumber(val) {
  const reg = (/\D/g).test(val)
  return !reg
}
function numBoolean(val) {
  return (val * 1 === 1 || val * 1 === 0)
}

function email(val) {
  return val
}

/**
 * 判断name的值在arr中是否唯一
 * @param <Array> arr
 * @param <String> arr
 * @return <String> err
 * */
function isUniqueInArr(arr, name) {
  const res = { err: null, data: ''}
  const isValid = Object.prototype.toString.call(arr) === '[object Array]'
  if(!isValid || !arr.length) {
    res.err = new RangeError('必需是数组且至少有一个选项')
    return res
  }
  const map = new Map()
  arr.every((item) => {
    console.log('item', item)
    console.log('res11', map.get(item[name]))
    if(map.get(item[name])) {
      res.err = new RangeError('id或name不唯一')
      return false
    }
    map.set(item[name], true)
    return true
  })
  return res
}

function isTypeNumber(data) {
  const strType = Object.prototype.toString.call(data)
  if(strType === '[object Number]'){
    return { err: null, data }
  } else if(strType === '[object String]' && isNaN(Number(data))) {
    return { err: null, data }
  }
  return { err: new TypeError(`${data} is not Number`), data }
}
function isStringType(data) {
  const strType = Object.prototype.toString.call(data)
  if(strType === '[object String]'){
    return { err: null, data }
  } else if(strType === '[object Number]') {
    return { err: null, data: String(data) }
  }
  return { err: new TypeError(`${data} is not string`), data }
}
function isArrayType(data) {
  const strType = Object.prototype.toString.call(data)
  if(strType === '[object Array]'){
    return { err: null, data }
  }
  return { err: new TypeError(`${data} is not Array`), data }
}
function isObjectType(data) {
  const strType = Object.prototype.toString.call(data)
  if(strType === '[object Object]'){
    return { err: null, data }
  }
  return { err: new TypeError(`${data} is not Array`), data }
}
export default {
  isUniqueInArr,
  email,
  numBoolean,
  isNoTrim,
  isw,
  isNumber,
  isStringType,
  isTypeNumber,
  isArrayType,
  isObjectType
}
