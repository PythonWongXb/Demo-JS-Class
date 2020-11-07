<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

// 代码refactoring 重构
// 3层coding level
// level 1: 逻辑可以实现业务需求
// level 2: 可以抽取一些函数
// function 1 =>
// const num: 1
//          function 2
//          function 3 => function 4
//          function 5 => function 6
//          function 7 => function 8 => ...

// level 3: 封装类 => 面向对象 1. 封装 2. 继承 3. 多态
// 封装demo const res = a.b.c => a.c
// 继承demo 1.normal => ihhert funtion prop super 2. 抽象基类 abstract base class
// 超类 与 基类

// plumages => 羽毛
//

@Options({
})

class Home extends Vue {
}
export default Home
</script>
