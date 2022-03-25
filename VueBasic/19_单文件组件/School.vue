<template>
<!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称{{msg}}</h2>
    </div>
</template>

<script>
/* 组件交互相关的代码 */
/* 三种暴露方式 */
export default {
    name: 'School',
    data(){
        return {
            msg: 'school'
        }
    },
    methods: {
        
    },
}
</script>

<style>
/* 组件的样式 */
.demo{
    background-color: blue;
}
</style>