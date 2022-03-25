<template>
  <h1>我是App组件</h1>
  <h3>{{p.name}}---{{p.age}}</h3>
  <h3>{{p.job.type}}---{{p.job.salary}}</h3>
  <h3>{{p.job.a.b.c}}</h3>
  <ul>
    <li v-for="(item, index) in p.hobby" :key="index">{{item}}</li>
  </ul>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
// 响应式!!!
import {reactive} from 'vue'

/*  
reactive函数 
  - 定义一个对象类型的响应式数据
  - const 代理对象 = ractive(原对象)
  - reactive定义的响应式数据是“深层次的”
  - 内部基于es6的proxy实现，通过代理对象操作源独享内部数据进行操作。
*/

export default {
  name: 'App',
  setup() {
    // 数据
    let person = {
      name: '张三',
      age: 13,
      job: {
        type: 'web 工程师',
        salary: '20k',
        a:{
          b:{
            c:333
          }
        }
      },
      hobby: ['smoke', 'game', 'sing']
    }
    let p = reactive(person)
    
    // 方法
    function changeInfo(){
      p.name = 'Denny';
      p.age = 12;

      p.job.type = 'UI设计师';
      p.job.salary = '18k';
      p.job.a.b.c = 111;

      p.hobby[0] = '学习'
    }

    // 返回一个对象[常用！！]
    return {
      p,
      changeInfo
    }

  }
}
</script>

<style>
</style>
