<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
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

// 课程的目的是：demo => 以多态取代条件表达式

interface Bird {
  name: string
  type: number
}

function plumages(birds: Bird[]) {
  return new Map(birds
                .map(bird => createBird(bird))
                .map(birdObject => [birdObject.name, birdObject.plumage])
  )
}

function speeds(birds: Bird[]) {
  return new Map(birds
                .map(bird => createBird(bird))
                .map(birdObject => [birdObject.name, birdObject.airSpeedVelocity])
  )
}

// 有两个不同的操作，其行为都随着鸟的类型而发生变化，
// 因此可以创建出对应的类，用多态来处理各类型特有的行为
// 针对每个鸟创建一个子类，用一个工厂函数来十实例化合适的子类对象

function createBird(bird: Bird) {
  if (bird.type === 1) {
    return new DaYanClass(bird)
  } else if (bird.type === 2) {
    return new JiaQiaoClass(bird)
  } else if (bird.type === 3) {
    return new YanZiClass(bird)
  } else {
    return new BridClass(bird)
  }
}

class BridClass {
  name: string
  type: number
  constructor(birdObject: Bird) {
    this.type = birdObject.type
    this.name = birdObject.name
  }

  get plumage() {
    let res
    if (this.type === 1) {
      res = this.name
    } else if (this.type === 2) {
      res = this.name
    } else if (this.type === 3) {
      res = this.name
    } else {
      res = '不确定动物'
    }
    return res + '的羽毛'
  }

  get airSpeedVelocity() {
    let res
    if (this.type === 1) {
      res = this.name
    } else if (this.type === 2) {
      res = this.name
    } else if (this.type === 3) {
      res = this.name
    } else {
      res = '不确定动物'
    }
    return res + '的速度'
  }
}

class DaYanClass extends BridClass {
  name: string
  constructor(bird: Bird) {
    super(bird)
    this.name = bird.name + '1'
  }
  get plumage() {
    return this.name + '的羽毛颜色'
  }

  get airSpeedVelocity() {
    return this.name + '的速度'
  }
}

class JiaQiaoClass extends BridClass {
  get plumage() {
    return this.name + '的羽毛颜色'
  }

  get airSpeedVelocity() {
    return this.name + '的速度'
  }
}

class YanZiClass extends BridClass {
  get plumage() {
    return this.name + '的羽毛颜色'
  }

  get airSpeedVelocity() {
    return this.name + '的速度'
  }
}

const birds = [
  {
    name: '大雁',
    type: 1,
  },
  {
    name: '家雀',
    type: 2,
  },
  {
    name: '燕子',
    type: 3,
  },
  {
    name: '其他',
    type: 4,
  },
]

const birdPlumages = plumages(birds)
const birdSpeeds = speeds(birds)
console.log(birdPlumages, birdSpeeds)
@Options({})
class Home extends Vue {}
export default Home
</script>
