<template>
<div>
    <ul>
        <li v-for="message in messageList" :key='message.id'>
            <!-- 跳转路由并协转params参数，to的对象写法 -->
            <!-- 路由命名 -->
            <router-link :to="{
                path: '/home/message/detail',
                query: {
                    id: message.id,
                    title: message.title
                }
            }">
                {{message.title}}
            </router-link>

            <button @click="pushShow(message)">push查看</button>
            <button @click="replaceShow(message)">replace查看</button>
            
        </li>
    </ul>
    <hr>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'Message',
    data(){
        return {
            messageList: [
                {id: '001', title: 'message001'},
                {id: '002', title: 'message002'},
                {id: '003', title: 'message003'},
            ]
        }
    },
    methods: {
        pushShow(message){
            // console.log(this.$router);
            this.$router.push({
                // 只能是 name !!!!
                name: 'xiangqing',
                // name: '/home/message/detail',
                query: {
                    id: message.id,
                    title: message.title
                }
            })
        },
        replaceShow(message){
            this.$router.replace({
                // 只能是 name !!!!
                name: 'xiangqing',
                // name: '/home/message/detail',
                query: {
                    id: message.id,
                    title: message.title
                }
            })
        }
    }
}
</script>

<style>

</style>