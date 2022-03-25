<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 默认插槽 -->

        <!-- 先在App组件解析后，再来插槽slot -->
        <slot>xxxx</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: [ 'title'],
}
</script>

<style>
.category{
    width: 170px;
    height: 220px;
    background-color: cadetblue;
}
h3{
    background-color: coral;
    text-align: center;
}

</style>