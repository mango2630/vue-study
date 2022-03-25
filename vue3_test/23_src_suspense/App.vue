<template>
  <div class="app">
    <h3>我是app组件:{{name}}--{{price}}</h3>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>加载中........</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
/* 
  suspense组件
 */

// import Child from './component/Child' //静态引入

import {defineAsyncComponent} from 'vue'
// 动态引入
const Child = defineAsyncComponent(()=>import('./component/Child'))
export default {
  name: 'App',
  components: {Child},
}
</script>

<style>
.app{
  width: 300px;
  /* height: 340px; */
  background-color: gold;
}
.child{
  width: 270px;
  /* height: 300px; */
  background-color: rgba(165, 42, 42, 0.815);
}
.son{
  width: 220px;
  /* height: 230px; */
  background-color: violet;
}
</style>
