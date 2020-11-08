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
// 目的：我的朋友有一群鸟儿，1. 我们想知道这些鸟飞的多快速，2. 他们的羽毛是什么颜色？

interface Bird {
  name: string,
  type: number
}

function plumage (bird: Bird) {
  let res
  if (bird.type === 1) {
    res = bird.name
  } else if (bird.type === 2) {
    res = bird.name
  } else if (bird.type === 3) {
    res = bird.name
  } else {
    res = '不确定动物'
  }
  return res + '的羽毛'
}

function airSpeedVelocity (bird: Bird) {
  let res
  if (bird.type === 1) {
    res = bird.name
  } else if (bird.type === 2) {
    res = bird.name
  } else if (bird.type === 3) {
    res = bird.name
  } else {
    res = '不确定动物'
  }
  return res + '的速度'
}

function plumages (birds: Bird[]) {
  return new Map(birds.map(bird => [bird.name, plumage(bird)]))
}

function speeds (birds: Bird[]) {
  return new Map(birds.map(bird => [bird.name, airSpeedVelocity(bird)]))
}

const birds = [
  {
    name: '大雁',
    type: 1
  },
  {
    name: '家雀',
    type: 2
  },
  {
    name: '燕子',
    type: 3
  },
  {
    name: '其他',
    type: 4
  }
]

const birdPlumages = plumages(birds)
const birdSpeeds = speeds(birds)
console.log(birdPlumages, birdSpeeds)
@Options({
})

class Home extends Vue {
}
export default Home
</script>
