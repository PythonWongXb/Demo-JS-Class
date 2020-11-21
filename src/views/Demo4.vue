<!--
 * @Author: your name
 * @Date: 2020-11-10 22:59:13
 * @LastEditTime: 2020-11-21 16:42:10
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

/**
 * 主题：第二季：以多态取代条件表达式
 * 目的2：你有一家评测机构，要对远洋船的航行进行投资的等级评估
 * 评估的时候既要考虑航程本身的特征（1. 去哪儿，2.多远 3.risk, 也要考虑船长航行的历史（1.他去过那些地方，2.成果如何, 然后给你投资评估等级 A或者B
 * 掌握一个技能，本领 => 5w1h => (1.what 2. why 3. how) => 4.when => 5.who
 * teach you a demo, just that.
 * really learned => really know this demo. => know everything, every details in the demo.
 */

interface Voyage {
  zone: string,
  length: number,
}

interface History {
  zone: string,
  profit: number,
}

function hasChina(historyList: History[]): boolean {
  return historyList.some(item => item.zone === 'china')
}

function voyageRisk(voyage: Voyage): number {
  let res = 1
  if (voyage.length < 5) {
    res += 2
  } else {
    res += 4
  }
  if (['china', 'east-indies'].includes(voyage.zone)) res += 4
  return res
}

function voyageProfitFactor(voyage: Voyage, historyList: History[]): number {
  let res = 1
  if (historyList.length < 5) {
    res += 2
  } else {
    res += 3
  }
  res += historyList.filter(item => item.profit > 0).length
  if (voyage.zone === 'china' && hasChina(historyList)) res -= 2
  return Math.max(res, 0)
}

function captionHistoryRisk(voyage: Voyage, historyList: History[]): number {
  let res = 1
  if (voyage.zone === 'china') res += 1
  if (voyage.zone === 'east-indies') res += 1
  if (voyage.zone === 'china' && hasChina(historyList)) {
    res += 3
    if (historyList.length > 3) res += 3
    if (voyage.length > 3) res += 3
  } else {
    if (historyList.length > 8) res += 1
    if (voyage.length > 8) res += 1
  }
  return res
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
function _getProfitFactorRisk(vpf: number): number {
  return vpf * 3
}

function _getCaptionFactorRisk(vr: number, chr: number): number {
  return vr + chr * 2
}

function _getLevel(vpf: number, vr: number, chr: number): string {
  const profitFactorRisk = _getProfitFactorRisk(vpf)
  const captionFactorRisk = _getCaptionFactorRisk(vr, chr)
  return profitFactorRisk < captionFactorRisk ? 'A' : 'B'
}

function rating (voyage: Voyage, historyList: History[]) {
  const vpf = voyageProfitFactor(voyage, historyList)
  const vr = voyageRisk(voyage)
  const chr = captionHistoryRisk(voyage, historyList)
  const isLevelA = _getLevel(vpf, vr, chr)
  return isLevelA ? 'A' : 'B'
}

const myRating = rating(voyage, historyList)
console.log(myRating)

@Options({})
class Home extends Vue {}
export default Home
</script>
