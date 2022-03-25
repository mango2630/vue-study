<template>
  <button @click='isShowDemo = !isShowDemo'>切换</button>
  <Demo v-if='isShowDemo' />
</template>

<script>
import Demo from './component/Demo'
import {ref} from 'vue'
export default {
  name: 'App',
  components: {Demo},
  setup() {
    let isShowDemo = ref(true);

    return {
      isShowDemo
    }
  }
}
</script>

<style>
</style>
