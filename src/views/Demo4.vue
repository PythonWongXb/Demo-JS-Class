<!--
 * @Author: your name
 * @Date: 2020-11-10 22:59:13
 * @LastEditTime: 2020-11-27 10:00:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-demo/src/views/Demo4.vue
-->
<template>
  <ul id="demo">
    <tree-item
      class="item"
      :item="treeData"
      @make-folder="makeFolder"
      @add-item="addItem"
    ></tree-item>
  </ul>
</template>
<script>

import TreeItem from '@/components/TreeItem'

export default {
  data () {
    return {
      treeData: {
        name: 'My Tree',
        children: [
          { name: 'hello' },
          { name: 'wat' },
          {
            name: 'child folder',
            children: [
              {
                name: 'child folder',
                children: [{ name: 'hello' }, { name: 'wat' }]
              },
              { name: 'hello' },
              { name: 'wat' },
              {
                name: 'child folder',
                children: [{ name: 'hello' }, { name: 'wat' }]
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    makeFolder: function(item) {
      item.children = []
      this.addItem(item)
    },
    addItem: function(item) {
      item.children.push({
        name: 'new stuff'
      })
    }
  },
  components: {
    TreeItem
  }
}
</script>
