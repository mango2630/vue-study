<template>
    <div>
        <h2>动画实现</h2>
        <Test />
        <hr>
        <h2>过渡实现</h2>
        <Test2 />
        <hr>
        <h3>多个元素过度</h3>
        <Test3 />
        <hr>
        <h3>集成动画库</h3>
        <Test4 />
    </div>
</template>

<script>
import Test from './components/Test'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
import Test4 from './components/Test4'

export default {
    name: 'App',
    data() {
        return {
            
        }
    },
    components: {
        Test,
        Test2,
        Test3,
        Test4
    },
    methods: {

    }
}
</script>

<style>

</style>