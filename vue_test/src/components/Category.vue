<template>
    <div class="category">
        <h3>{{title}}分类</h3>

        <!-- 传给了 插槽的 使用者 -->
        <slot :games="games" msg="hello">我是默认的一些内容</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: [ 'title'],
    data() {
        return {
            games: ['王者荣耀', '穿越火线', '超级玛丽', '劲舞团'],
        }
    },
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