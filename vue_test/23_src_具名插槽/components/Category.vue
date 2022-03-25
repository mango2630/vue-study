<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 具名插槽：具有名字的插槽 -->

        <slot name='center'>xxxx</slot>
        <slot name='footer'>xxx2</slot>
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
    background-color: cadetblue;
}
h3{
    background-color: coral;
    text-align: center;
}

</style>