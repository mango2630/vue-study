<template>
    <div>
        <h3>学校名字：{{schoolName}}</h3>
        <h3>学校地址：{{schoolAddress}}</h3>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'School',
    data(){
        return {
            schoolName: '北京大学',
            schoolAddress: '北京',
            id: ''
        }
    },
    mounted(){
        this.id = pubsub.subscribe('hello', (msgName, data)=>{
            console.log('有人发布了hello', msgName, data);
        })
    },
    beforeDestroy(){
        // 取消订阅
        pubsub.unsubscribe(this.id);
    }
}
</script>

<style>

</style>