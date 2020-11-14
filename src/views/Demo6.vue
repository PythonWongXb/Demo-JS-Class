<!--
 * @Author: your name
 * @Date: 2020-11-10 22:59:13
 * @LastEditTime: 2020-11-14 19:58:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-demo/src/views/Demo4.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

// 主题：第二季：以多态取代条件表达式
// 目的2：你有一家评测机构，要对远洋船的航行进行投资的等级评估，评估的时候既要考虑航程本身的特征（1. 去哪儿， 2.多远），也要考虑船长航行的历史（他去过那些地方，成果如何），然后给你投资评估等级 A或者B

interface Voyage {
  zone: string,
  length: number
}

interface History {
  zone: string,
  profit: number
}

function rating(voyage: Voyage, historyList: History[]) {
  const vpf = voyageProfitFactor(voyage, historyList)
  const vr = voyageRisk(voyage)
  const chr = captionHistoryRisk(voyage, historyList)
  if ((vpf * 3) < (vr + chr * 2)){
    return 'A'
  }
  else return 'B'
}

function voyageRisk(voyage: Voyage): number {
  return 1
}

function voyageProfitFactor(voyage: Voyage, historyList: History[]): number {
  if (historyList.find(item => item.zone === 'china')) {
    return 2
  }
  return 1
}

function captionHistoryRisk(voyage: Voyage, historyList: History[]): number {
  if (historyList.find(item => item.zone === 'china')) {
    return 2
  }
  return 1
}

function hasChina(history: History): Boolean {
  return true
}

const voyage = {
  zone: 'west-indies',
  length: 10
}

const historyList = [
  {
    zone: 'east-indies',
    profit: 5
  },
  {
    zone: 'china',
    profit: -5
  },
  {
    zone: 'west-indies',
    profit: 5
  },
  {
    zone: 'west-africa',
    profit: 9
  }
]

const myRating = rating(voyage, historyList)
console.log(myRating)

@Options({})
class Home extends Vue {}
export default Home
</script>
