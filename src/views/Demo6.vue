<!--
 * @Author: your name
 * @Date: 2020-11-21 16:52:34
 * @LastEditTime: 2020-11-21 17:21:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-demo/src/views/demo6.vue
-->
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
class Rate {
  voyage: Voyage
  historyList: History[]
  constructor(voyage: Voyage, historyList: History[]) {
    this.voyage = voyage
    this.historyList = historyList
  }

  get hasChina(): boolean {
    return this.historyList.some(item => item.zone === 'china')
  }

  get voyageRisk(): number {
    let res = 1
    if (this.voyage.length < 5) {
      res += 2
    } else {
      res += 4
    }
    if (['china', 'east-indies'].includes(this.voyage.zone)) res += 4
    return res
  }

  get voyageProfitFactor(): number {
    let res = 1
    if (this.historyList.length < 5) {
      res += 2
    } else {
      res += 3
    }
    res += this.historyList.filter(item => item.profit > 0).length
    if (this.voyage.zone === 'china' && this.hasChina) res -= 2
    return Math.max(res, 0)
  }

  get captionHistoryRisk(): number {
    let res = 1
    if (this.voyage.zone === 'china') res += 1
    if (this.voyage.zone === 'east-indies') res += 1
    if (this.voyage.zone === 'china' && this.hasChina) {
      res += 3
      if (this.historyList.length > 3) res += 3
      if (this.voyage.length > 3) res += 3
    } else {
      if (this.historyList.length > 8) res += 1
      if (this.voyage.length > 8) res += 1
    }
    return res
  }

  static _getProfitFactorRisk(vpf: number): number {
    return vpf * 3
  }

  static _getCaptionFactorRisk(vr: number, chr: number): number {
    return vr + chr * 2
  }

  static _getLevel(vpf: number, vr: number, chr: number): string {
    const profitFactorRisk = Rate._getProfitFactorRisk(vpf)
    const captionFactorRisk = Rate._getCaptionFactorRisk(vr, chr)
    return profitFactorRisk < captionFactorRisk ? 'A' : 'B'
  }

  get rating() {
    const vpf = this.voyageProfitFactor
    const vr = this.voyageRisk
    const chr = this.captionHistoryRisk
    const isLevelA = Rate._getLevel(vpf, vr, chr)
    return isLevelA ? 'A' : 'B'
  }
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

const myRating = new Rate(voyage, historyList)
console.log(myRating.rating)

@Options({})
class Home extends Vue {}
export default Home
</script>
