<!--
 * @Author: your name
 * @Date: 2020-11-18 10:32:33
 * @LastEditTime: 2020-11-18 10:57:01
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

function _promisify(func) {
  if (typeof func !== 'function') return func
  return (args = {}) =>
    new Promise((resolve, reject) => {
      func(
        args
      )
      resolve(1)
    })
}

function getNumber({ number }) {
  return number
}

@Options({
  mounted() {
    this.demo()
  }
})

class PromiseClass extends Vue {
  demo() {
    console.log('yes')
    _promisify(getNumber)({ number: 5 })
      .then(res => {
        console.log(res)
      })
  }
}

export default PromiseClass
</script>
