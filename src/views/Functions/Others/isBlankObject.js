/*
 * @Author: your name
 * @Date: 2020-11-26 15:14:57
 * @LastEditTime: 2020-11-26 15:28:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-demo/src/views/Functions/Others/isBlankObject.js
 */

// {}
// __proto__:
// __proto__: Object

// above is blank Object

function _isTotalBlankObject(obj) {
  return JSON.stringify(obj) === '{}'
}

function _hasNoLiterableProp(obj) {
  return Object.keys(obj).length
}

function isBlankObject(obj) {
  const hasNoLiterableProp = _hasNoLiterableProp(obj)
  const isTotalBlankObject = _isTotalBlankObject(obj)
  return hasNoLiterableProp || isTotalBlankObject
}
const obj = Object.create({})
console.log(obj)
const res = isBlankObject(obj)
console.log(res)

export default isBlankObject
