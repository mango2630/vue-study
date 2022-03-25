<template>
  <h1>我是App组件</h1>
  <h3>{{name}}---{{age}}</h3>
  <h3>{{job.type}}---{{job.salary}}</h3>
  <h3>{{job.a.b.c}}</h3>
  <ul>
    <li v-for="(item, index) in hobby" :key="index">{{item}}</li>
  </ul>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
// 响应式!!!
import {ref, reactive} from 'vue'

/*  
reactive函数 
  - 定义一个对象类型的响应式数据
*/

export default {
  name: 'App',
  setup() {
    // 数据
    let name = ref('张三');
    let age = ref(18);

    /* object:objectDefineProperty--->reactive:proxy(es6新提出的) */
    let job = reactive({
      type: 'web 工程师',
      salary: '20k',
      a:{
        b:{
          c:333
        }
      }
    })
    let hobby = reactive(['smoke', 'game', 'sing'])

    // 方法
    function changeInfo(){
      console.log(job);
      
      // ref 处理 基本数据类型
      name.value = 'Denny';
      age.value = 12;

      // reactive处理对象类型
      job.type = 'UI设计师';
      job.salary = '18k';
      job.a.b.c = 111;

      // reactive处理数组
      console.log(hobby);
      hobby[0] = '学习'
    }

    // 返回一个对象[常用！！]
    return {
      name,
      age,
      job,
      hobby,
      changeInfo
    }

  }
}
</script>

<style>
</style>
