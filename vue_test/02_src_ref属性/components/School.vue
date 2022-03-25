<template>
    <div class="demo">
        <h2>学校的名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: 'School',
            address: 'beijing'
        }
    }
}
</script>

<style>
.demo{
    width: 300px;
    height: 300px;
    background-color: crimson;
}
</style>