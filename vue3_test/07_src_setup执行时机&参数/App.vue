<template>
  <!-- 自定义事件 -->
  <Demo @hello='showHello' msg='hello' name='yuan' >
    <template v-slot:qwe>
      <span>尚硅谷</span>
    </template>
  </Demo>
</template>

<script>
/*  
  setup执行的时机：
    - 在beforeCreate之前执行一次，this是undefined
  setup参数：
    - props
    - context
      - attrs
      - slots
      - emit 分发发自定义事件函数
*/
import Demo from './component/Demo'

export default {
  name: 'App',
  components: {Demo},
  
  beforeCreate() {
    console.log('beforecreate')
  },
  setup() {
    function showHello(value){
      console.log('showHello-------', value)
    }

    return {
      showHello
    }
  }
}
</script>

<style>
</style>
