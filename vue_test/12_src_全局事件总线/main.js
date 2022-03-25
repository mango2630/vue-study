import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// window.x = {a: 1,b: 2}

// Vue.extend生成 ==> VueComponent

// VueComponent.prototype.__proto__ === Vue.prototype
// Vue.prototype.x = 12;

// console.log(Vue.prototype);

/* const Demo = Vue.extend({})
const d = new Demo()
Vue.prototype.x = d; */

// 创建 vm
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate(){
        // 安装全局事件总线
        Vue.prototype.$bus = this;
    }
})
