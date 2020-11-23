<!--
 * @Author: your name
 * @Date: 2020-11-21 16:52:34
 * @LastEditTime: 2020-11-21 22:34:31
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
 * 主题：第二季 以多态取代条件表达式
 * 目的2：你有一家评测机构，要对远洋船的航行进行投资的等级评估
 * 评估的时候既要考虑航程本身的特征（1. 去哪儿，2.多远 3.risk, 也要考虑船长航行的历史（1.他去过那些地方，2.成果如何, 然后给你投资评估等级 A或者B
 * 掌握一个技能，本领 => 5w1h => (1.what 2. why 3. how) => 4.when => 5.who
 * teach you a demo,just that.
 * really learned => really know this demo. => know everything, every details in the demo.
 * 可扩展性高、可维护性高、可读性高、耦合性低 => 诗一样的代码 => 我是一个诗人
 * I want to tell you something I think is useful to you:
 * I am a poet, I write down codes that are like poems,
 * And you, one of my student (because you had learn my lesson), you must write down codes like poems.
 * If you can't do this, please you never say to anynone that you were my student. It will be a shame for me.
 * thanks for watching, everyone, good luck to you!
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
    return Math.max(res, 0)
  }

  get voyageFactor(): number {
    let res = 0
    if (this.voyage.length > 8) res += 1
    return res
  }

  get historyListLengthFactor(): number {
    let res = 0
    if (this.historyList.length > 8) res += 1
    return res
  }

  get captionHistoryRisk(): number {
    let res = 1
    if (this.voyage.zone === 'china') res += 1
    if (this.voyage.zone === 'east-indies') res += 1
    res += this.historyListLengthFactor
    res += this.voyageFactor
    return res
  }
  // 对象 => 实例对象 => 函数对象或者说方法对象 prototype Promise.prototype.then Promise.all Promise.race

  get rating() {
    const vpf = this.voyageProfitFactor
    const vr = this.voyageRisk
    const chr = this.captionHistoryRisk
    const isLevelA = Rate._getLevel(vpf, vr, chr)
    return isLevelA ? 'A' : 'B'
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
}

class ExperienceChinaRate extends Rate {
  get captionHistoryRisk() {
    return super.captionHistoryRisk + 3
  }

  get voyageFactor(): number {
    let res = 0
    if (this.voyage.length > 3) res += 3
    return res
  }

  get historyListLengthFactor(): number {
    let res = 0
    if (this.historyList.length > 3) res += 3
    return res
  }

  get voyageProfitFactor(): number {
    const res = super.voyageProfitFactor - 2
    return Math.max(res, 0)
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

function createRate(voyage: Voyage, historyList: History[]) {
  function hasChina(historyList: History[]): boolean {
    return historyList.some(item => item.zone === 'china')
  }

  if (voyage.zone === 'china' && hasChina(historyList)) {
    return new ExperienceChinaRate(voyage, historyList)
  } else {
    return new Rate(voyage, historyList)
  }
}

const myRating = createRate(voyage, historyList)
console.log(myRating.rating)

@Options({})
class Home extends Vue {}
export default Home
</script>
