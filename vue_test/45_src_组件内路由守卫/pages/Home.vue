<template>
    <div>
        <h2>我是Home组件</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>

            <!-- 避免走销毁路程！！！！ -->
            <!-- 加入include, 只保持News！！，其余message正常销毁 -->
            <keep-alive :include="['News', 'Message']">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return {

        }
    },
}
</script>

<style>

</style>