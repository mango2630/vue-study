<template>
  <div class="app">
    <h3>我是app组件:{{name}}--{{price}}</h3>
    <Child />
  </div>
</template>

<script>
/* 
  teleport: 瞬间移动
 */
import Child from './component/Child'


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
