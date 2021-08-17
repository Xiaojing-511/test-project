/*
 * @Author: your name
 * @Date: 2021-06-08 19:56:11
 * @LastEditTime: 2021-06-13 23:41:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /test-project/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(router);
app.mount('#app')