<template>
    <div class="bg">
        <h3>学生名称：{{name}}</h3>
        <button @click='sendStudentName'>传递学生name</button>
        <button @click='unbind'>解绑atguigu事件</button>
        <button @click="death">销毁student组件</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:'jenny'
        }
    },
    methods: {
        sendStudentName(){
            this.$emit('atguigu', this.name)
            // this.$emit('test', this.name)
        },
        unbind(){
            // 解绑一个自定义事件
            // this.$off('atguigu');

            // 解绑多个自定义事件
            this.$off(['atguigu', 'test']);

            // 解绑所有自定义事件
            // this.$off();
        },
        death(){
            // 销毁vc组件实例后，绑定在自身上的自定义事件都是不奏效的。
            this.$destroy()
        }
    }
}
</script>

<style scoped>
.bg{
    width: 200px;
    height: 100px;
    background-color: blueviolet;
}
</style>