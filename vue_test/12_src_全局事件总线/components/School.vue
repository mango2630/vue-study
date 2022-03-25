<template>
    <div>
        <h3>学校名字：{{schoolName}}</h3>
        <h3>学校地址：{{schoolAddress}}</h3>
    </div>
</template>

<script>
export default {
    name: 'School',
    data(){
        return {
            schoolName: '北京大学',
            schoolAddress: '北京'
        }
    },
    mounted(){
        console.log('school', this);

        // this ===> [vc]
        // 绑定该事件
        this.$bus.$on('hello', (data)=>{
            console.log('school', data);
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello');
    }
}
</script>

<style>

</style>