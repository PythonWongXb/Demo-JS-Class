/*
 * @Author: your name
 * @Date: 2020-11-26 14:31:52
 * @LastEditTime: 2020-12-06 22:00:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-demo/src/views/Functions/Others/deepClone.js
 */

const IS_OBJ = '[object Object]'
const IS_ARRAY = '[object Array]'

function deepClone(oldObj, newObj) {
  for (const keyOrIndex in oldObj) {
    if (Array.isArray(keyOrIndex) || Object.prototype.toString.call(keyOrIndex) === IS_ARRAY) {
      newObj[keyOrIndex] = []
      deepClone(oldObj[keyOrIndex], newObj[keyOrIndex])
    } else if (Object.prototype.toString.call(keyOrIndex) === IS_OBJ) {
      newObj[keyOrIndex] = {}
      deepClone(oldObj[keyOrIndex], newObj[keyOrIndex])
    } else {
      newObj[keyOrIndex] = oldObj[keyOrIndex]
    }
  }
}

function goodDeepClone(obj = {}) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (const key in obj) {
    // 避免是原型链上的属性
    if (Object.hasOwnProperty.call(obj, key)) {
      result[key] = goodDeepClone(obj[key])
    }
  }

  return result
}

const obj1 = {
  a: 0,
  b: {
    c: 0
  },
  d: [
    5,
    {
      d: 'dDemo',
      e: [
        {
          e: 'eDemo'
        }
      ]
    }
  ]
};
const obj = {}

deepClone(obj1, obj)
goodDeepClone(obj1)
console.log(obj)

export default deepClone
