import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;


// 创建 vm
new Vue({
    el: '#app',
    render: h => h(App),
    // 安装全局事件总线
    beforeCreate(){
        Vue.prototype.$bus = this;
    }
})
