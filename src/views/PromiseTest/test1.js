/*
 * @Author: your name
 * @Date: 2020-11-28 17:55:18
 * @LastEditTime: 2020-11-28 23:52:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editse
 * @FilePath: /ts-demo/src/views/PromiseTest/test1.js
 */

// print => 1 a 7 b => 1 7（a => 2 3）(b => 8) (c => 4) (d => 6) (e => 5) 0

// a => 1之后是 第一个then的回调函数放在微队列之中 => c
// b => 7之后将 第二个then的回调函数放在微队列之中
// c =>
// d
// e

// 微队列 => [a, b, c, d, e]
// 宏队列 => [ 0, ]

setTimeout(() => {
  console.log(0)
}, 1000)

new Promise((resolve, reject) => {
  console.log(1)
  resolve()
})
  // a
  .then(() => {
    console.log(2)
    new Promise((resolve, reject) => {
      console.log(3)
      resolve()
      // resolve执行完之后我们发现你这没有renturn，返回undefinded，走scb
    })
      // c
      .then(() => {
        console.log(4)
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
          }, 400);
        })
      })
      // e
      .then(() => {
        console.log(5)
      })
      .then(() => {
        setTimeout(() => {
          console.log('+++')
        }, 0
        )
      })
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 500);
    })
  })
  // d
  .then((val) => {
    console.log(val)
    console.log(6)
  })

new Promise((resolve, reject) => {
  console.log(7)
  resolve()
})
  // b
  .then(() => {
    console.log(8)
  })
