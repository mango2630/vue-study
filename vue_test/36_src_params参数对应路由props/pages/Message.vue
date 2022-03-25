<template>
<div>
    <ul>
        <li v-for="message in messageList" :key='message.id'>

            <!-- 跳转路由并协转params参数，to的字符串写法 -->
            <!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{message.title}}</router-link> -->
            

            <!-- 跳转路由并协转params参数，to的对象写法 -->
            <!-- 路由命名 -->
            <router-link :to="{
                name: 'xiangqing',
                params: {
                    id: message.id,
                    title: message.title
                }
            }">
                {{message.title}}
            </router-link>


            <!-- 路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！！！ -->
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
    }
}
</script>

<style>

</style>