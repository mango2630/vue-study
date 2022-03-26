<template>
    <ul>
        <li>消息编号：{{id}}</li>
        <li>消息标题：{{title}}</li>
        <!-- <li>{{a}}, {{b}}</li> -->

        <li>{{id}}---{{title}}</li>
    </ul>
</template>

<script>
export default {
    name: 'Detail',
    props: ['id', 'title'],
}
</script>

<style>

</style>