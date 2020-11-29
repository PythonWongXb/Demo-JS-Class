<!--
 * @Author: your name
 * @Date: 2020-11-23 16:43:36
 * @LastEditTime: 2020-11-23 16:47:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-demo/src/views/promise/personna-func.vue
-->
<style scoped lang="sass">
.app_container

</style>

<template lang="pug">
.app_container

</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

/**
 * asyncFunc()
 *   .then(f1)
 *   .catch(r1)
 *   .then(f2)
 *   .done()
 *
 * 无论Promise对象的回调函数链以then方法还是catch方法结尾，只要最后一个方法抛出错误都是无法捕捉到的，因为catch中的函数也有可能出现error，（因为promise内部的错误不会冒泡到全局）
 * 为此
 */


@Component
class PersonFunc extends Vue {
}

export default PersonFunc
</script>
