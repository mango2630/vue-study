<template>
    <div class="demo">
        <h2 class="qw">schoolName: {{name}}</h2>
    </div>
</template>

<script>

export default {
    data(){
        return {
            name: 'school',
        }
    },
    methods: {
        
    }
}
</script>

<style lang="less">
.demo{
    width: 300px;
    height: 150px;
    background-color: rgb(27, 220, 20);
    .qw{
        color: red;
    }
}
</style>