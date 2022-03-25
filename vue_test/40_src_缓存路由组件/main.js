import Vue from 'vue';
import App from './App.vue';

// 引入路由器
import VueRouter from 'vue-router';
import router from './router'

// 应用插件！！！！
Vue.use(VueRouter)

Vue.config.productionTip = false;


// 创建 vm
const vm = new Vue({
    el: '#app',
    render: h => h(App),
    router,
    // 安装全局事件总线
    beforeCreate(){
        Vue.prototype.$bus = this;
    }
})
console.log('@@@@@vm',vm);