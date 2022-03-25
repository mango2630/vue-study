<template>
  <h1>我是App组件</h1>
  <h3>{{name}}---{{age}}---{{sex}}</h3>
  <button @click="sayHello">说话Vue3</button>
  <button @click="sayWelcome">说话Vue2</button>
</template>

<script>
// import {h} from 'vue'
export default {
  name: 'App',
  data(){
    return {
      sex: 'girl'
    }
  },
  methods: {
    sayWelcome(){
      console.log('welcome');

      // VUE2的配置中可以调用vue3的配置。
      /* console.log(this.name, this.age, this.sayHello);
      this.sayHello() */
    }
  },
  setup() {
    /* 
      - setup是所有 CompositionAPI"表演舞台"
      - 组件中所用到的：数据、方法等等，均要在配置setup中。
      - 两种返回值：
        - 返回一个对象，则对象中的属性、方法，在模板中均可以直接使用。
        - 返回一个渲染函数：则可自定义渲染内容。
      - 尽量不要与 vue2.x混用。
      - 如有重名，setup优先。
    */
    

    /* 此处只是测试一下setup，暂时不考虑响应式 */

    // 数据
    let name = '张三';
    let age = 12;

    // 方法
    function sayHello(){
      console.log(`我叫${name}, 今年${age}岁`);

      // vue3 中不能调用vue2的配置！！！
      console.log(this.sex, this.sayWelcome);
      this.sayWelcome();
    }

    // 返回一个对象[常用！！]
    return {
      name,
      age,
      sayHello
    }

    // 返回一个渲染函数
    /* return ()=>{
      return h('h1', 'atguigu')
    } */
  }
}
</script>

<style>
</style>
