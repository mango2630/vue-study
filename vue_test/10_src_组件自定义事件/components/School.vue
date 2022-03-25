<template>
    <div class="bg">
        <h3>学校名称：{{name}}</h3>
        <h3>学校地址：{{address}}</h3>
        <button @click="sendSchoolName">名字给父亲</button>
    </div>
</template>

<script>
export default {
    name: 'School',
    data(){
        return {
            name: '浙江大学',
            address: '浙江'
        }
    },
    props: ['getSchoolName'],
    methods: {
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    }
}
</script>

<style>
.bg{
    width: 200px;
    height: 150px;
    background-color: rgb(43, 214, 226);
}
</style>