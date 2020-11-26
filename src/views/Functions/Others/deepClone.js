/*
 * @Author: your name
 * @Date: 2020-11-26 14:31:52
 * @LastEditTime: 2020-11-26 15:25:57
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
console.log(obj)

export default deepClone
