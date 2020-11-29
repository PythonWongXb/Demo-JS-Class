/*
 * @Author: your name
 * @Date: 2020-10-24 16:00:59
 * @LastEditTime: 2020-11-28 18:04:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-demo/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './views/Functions/Others/deepClone.js'
import './views/Functions/Others/isBlankObject.js'
import './views/Functions/Others/formatData.js'
import './views/PromiseTest/test1.js'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
