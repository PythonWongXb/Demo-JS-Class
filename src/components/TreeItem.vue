<!--
 * @Author: your name
 * @Date: 2020-11-26 22:02:39
 * @LastEditTime: 2020-11-28 20:20:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-demo/src/components/Ptree.vue
-->
<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle" @dblclick="makeFolder">
      {{ item.name }}
      <span v-if="isFolder">[{{ isOpen ? "-" : "+" }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <tree-item
        class="item"
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        @make-folder="$emit('make-folder', $event)"
        @add-item="$emit('add-item', $event)"
      ></tree-item>
      <li class="add" @click="$emit('add-item', item)">+</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeItem',
  props: {
    item: Object
  },
  data: function() {
    return {
      isOpen: false
    };
  },
  computed: {
    isFolder: function() {
      return this.item.children && this.item.children.length;
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    makeFolder: function() {
      if (!this.isFolder) {
        this.$emit('make-folder', this.item);
        this.isOpen = true;
      }
    },

    demo() {
      [].map(item => ({
        ...item,
        name: 1
      })
      )
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
li {
  text-align: left;
}
</style>
