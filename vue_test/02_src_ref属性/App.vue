<template>
    <div>
        <h1 v-text='msg' ref='title' id='title'></h1>
        <button @click="showDOM">点我输出上方的DOM元素</button>
        <School ref="sch" />
    </div>
</template>

<script>
import School from './components/School'
export default {
    name: 'App',
    data() {
        return {
            msg: '欢迎学习VUE'
        }
    },
    components: {
        School
    },
    methods: {
        showDOM(){
            // document.getElementById('title')

            // this[vc实例对象]
            console.log(this.$refs.title);

            // school组件的实例对象
            console.log(this.$refs.sch);
        }
    }
}
</script>

<style>

</style>