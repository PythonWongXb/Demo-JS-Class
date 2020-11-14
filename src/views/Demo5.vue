<!--
 * @Author: your name
 * @Date: 2020-11-10 22:59:13
 * @LastEditTime: 2020-11-14 11:32:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-demo/src/views/Demo4.vue
-->
<style lang="sass" scoped>
.red
  background: red

.green
  background: green
</style>
<template>
  <div class="home">
    <img :style="{ background: index === 1 ? 'red': '' || index === 2 ? 'green': '' || index === 3 ? 'yellow': '' || list.includes(index) ? 'pink': '' }" alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

// 目的2：有一家评测机构，要对远洋船的航行进行投资的登记评估
// 其本质还是在于三元运算符与或逻辑运算符的理解
@Options({})
class Home extends Vue {
  created () {
    this.demo()
  }

  index = 1
  list =[
    1,
    2,
    3
  ]

  demo () {
    const res = this.index === 1 ? 'red' : 'blank' || this.index === 2 ? 'green' : '' || this.index === 3 ? 'yellow' : '' || this.index === 1 ? 'pink' : ''
    console.log(res)
  }
}
export default Home
</script>
