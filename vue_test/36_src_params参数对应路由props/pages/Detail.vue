<template>
    <ul>
        <li>消息编号：{{$route.params.id}}</li>
        <li>消息标题：{{$route.params.title}}</li>
        <!-- <li>{{a}}, {{b}}</li> -->

        <li>{{id}}---{{title}}</li>
    </ul>
</template>

<script>
export default {
    name: 'Detail',
    props: ['id', 'title'],
    mounted(){
        // console.log('@@@@@@......', this);
        // this.$route.query
        
    }
}
</script>

<style>

</style>