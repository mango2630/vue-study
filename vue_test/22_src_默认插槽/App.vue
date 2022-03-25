<template>
    <div class="container">
        <Category title="美食" :listData="foods">
            <img src="https://www.luotianews.com/wp-content/uploads/2020/11/35732102507286965.jpg" alt="">
        </Category>
        
        <Category title="游戏">
            <ul v-for="(item, index) in games" :key="index">
            <li>{{item}}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls src="https://www.bilibili.com/video/BV1pZ4y1o7gF?t=5.6" ></video>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category'
export default {
    name: 'App',
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾', '牛i拍'],
            games: ['王者荣耀', '穿越火线', '超级玛丽', '劲舞团'],
            films: ['《教父》', '《穿越火线》', '《你好，李焕英》', '《尚硅谷》']
        }
    },
    components: {
        Category
    }
}
</script>

<style>
.container{
    display: flex;
    justify-content: space-around;
}
img, video{
    width: 150px;
    display: block;
    margin: 0px auto;
}
</style>