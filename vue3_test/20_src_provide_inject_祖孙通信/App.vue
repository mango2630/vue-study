<template>
  <div class="app">
    <h3>我是app组件:{{name}}--{{price}}</h3>
    <Child />
  </div>
</template>

<script>
import {toRefs, reactive, provide} from 'vue'
import Child from './component/Child'
export default {
  name: 'App',
  components: {Child},
  setup(){
    let car = reactive({
      name:'benchi',
      price: '40w'
    })

    // 给自己的后代组件提供数据
    provide('car', car)
    return {
      ...toRefs(car)
    }
  }
}
</script>

<style>
.app{
  width: 300px;
  height: 340px;
  background-color: gold;
}
.child{
  width: 270px;
  height: 300px;
  background-color: rgba(165, 42, 42, 0.815);
}
.son{
  width: 220px;
  height: 230px;
  background-color: violet;
}
</style>
