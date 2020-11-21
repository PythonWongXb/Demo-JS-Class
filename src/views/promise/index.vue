<!--
 * @Author: your name
 * @Date: 2020-11-18 10:32:33
 * @LastEditTime: 2020-11-20 23:03:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-demo/src/views/promise/index.vue
-->
<style scoped lang="sass">
.app_container

</style>

<template lang="pug">
.app_container

</template>

<script>
import { Vue, Options } from 'vue-class-component'

// 工厂函数与Promise化封装

function _promisify(func) {
  if (typeof func !== 'function') return func
  return (params = {}) => {
    return new Promise((resolve, reject) => {
      func(
        Object.assign(
          params,
          {
            success: resolve,
            fail: reject
          }
        )
      )
    }
    )
  }
}

function getNumber({ number = 1, success = (name = 1) => name, fail = (name) => name }) {
  if (number > 1) {
    success(number)
  } else {
    fail(number)
  }
  return number
}

@Options({
  mounted() {
    // this.demo()
    this.test()
  }
})

class PromiseClass extends Vue {
  demo() {
    _promisify(getNumber)({ number: 5 })
      .then(res => {
        console.log(res)
      })
  }

  test() {
    const func = _promisify(getNumber)({
      number: 5
    })
    console.log(func.then(res => {
      console.log(res)
      return Promise.resolve(res)
    }
    ))
  }
}

export default PromiseClass
</script>
