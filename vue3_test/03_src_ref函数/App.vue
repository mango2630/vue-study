<template>
  <h1>我是App组件</h1>
  <h3>{{name}}---{{age}}</h3>
  <h3>{{job.type}}---{{job.salary}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
// 响应式!!!
import {ref} from 'vue'
/* 
  RefImpl-->reference implement 引用实现
*/


export default {
  name: 'App',
  setup() {
    // 数据
    let name = ref('张三');
    let age = ref(18);
    let job = ref({
      type: 'web 工程师',
      salary: '20k'
    })

    // 方法
    function changeInfo(){
      console.log(name, age, job); // RefImpl的实例对象
      name.value = 'Denny';
      age.value = 12;

      job.value.type = 'UI设计师';
      job.value.salary = '18k';

      console.log(name, age);
    }

    // 返回一个对象[常用！！]
    return {
      name,
      age,
      job,
      changeInfo
    }

  }
}
</script>

<style>
</style>
