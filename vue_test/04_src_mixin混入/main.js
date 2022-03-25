import Vue from 'vue';
import App from './App.vue';

// 全局混合
/* import {mixin} from './mixin'
Vue.mixin(mixin) */

Vue.config.productionTip = false;

// 创建 vm
new Vue({
    el: '#app',
    render: h => h(App),
})
