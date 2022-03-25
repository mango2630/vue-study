// 引入的不再是Vue构造函数，而是一个 createApp工厂函数
// 工厂函数不用new，能直接调用
import { createApp } from 'vue'

import App from './App.vue'

// createApp(App).mount('#app')

// 创建应用实例对象——app[类似于vue2中的vm， 但app比vm更轻！]
const app = createApp(App)
console.log('createApp', app);
// 挂载！！
app.mount('#app');