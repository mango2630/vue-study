<template>
  <div class="app">
    <h3>我是app组件:{{name}}--{{price}}</h3>

  </div>
</template>

<script>
import {toRefs, reactive, isProxy, isRef, isReactive, isReadonly, readonly, ref} from 'vue'

export default {
  name: 'App',
  components: {},
  setup(){
    let car = reactive({
      name:'benchi',
      price: '40w'
    })
    let sum = ref(0);
    let car2 = readonly(car)

    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(sum)); // false
    console.log(isProxy(car));

    return{
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
