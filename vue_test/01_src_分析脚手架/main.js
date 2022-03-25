/*  
  该文件是整个项目的入口文件
*/

import Vue from 'vue'
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false


// 创建Vue实例
new Vue({
  el: '#app',

  // 功能：将App组件放入容器中
  render: h => h(App),

  /* render(createElement){
    console.log(createElement);
    return createElement('h1', 'helloworld');
  } */

})

