import Vue from 'vue';
import App from './App.vue';
// 引入插件
import vueResource from 'vue-resource'

// 引入store
import store from './store/index'

Vue.config.productionTip = false;

Vue.use(vueResource); // $http




// 创建 vm
const vm = new Vue({
    el: '#app',
    render: h => h(App),
    store: store,
    // 安装全局事件总线
    beforeCreate(){
        Vue.prototype.$bus = this;
    }
})
console.log(vm);