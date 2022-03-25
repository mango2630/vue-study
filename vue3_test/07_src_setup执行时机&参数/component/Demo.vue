<template>
    <h1>我是App组件</h1>
    <h3>{{person.name}}---{{person.age}}</h3>
    <hr>
    <button @click="test">测试触发自定义事件</button>
    <slot></slot>
    <slot name='qwe'></slot>
</template>

<script>
export default {
    name: 'Demo',
    beforeCreate() {
        console.log('beforecreate----', this)
    },
    props: ['msg', 'name'],
    emits: ['hello'],
    setup(props, context) {
        console.log('setup----------', this);//undefined

        console.log(props, context);
        console.log('@@', context.attrs); // $attrs 【props】
        console.log('@@@', context.emit); // 触发自定义事件
        console.log('@@@@', context.slots);
        
        let person = {
            name: '张三',
            age: 13,
        }
        function test(){
            // 触发自定义事件hello
            context.emit('hello', 22222)
            console.log('自定义事件测试，emit');
        }
        return {
            person,
            test
        }
    },
}
</script>

<style>

</style>