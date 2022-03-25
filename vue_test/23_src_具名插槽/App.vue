<template>
    <div class="container">
        <Category title="美食" :listData="foods">
            <img slot="center" src="https://www.luotianews.com/wp-content/uploads/2020/11/35732102507286965.jpg" alt="">
            <a slot="footer" href="http://www.atguigu.com">尚硅谷</a>
        </Category>
        <Category title="游戏">
            <ul slot="center" v-for="(item, index) in games" :key="index">
            <li>{{item}}</li>
            </ul>
            <div class='foot' slot="footer">
                <a href="http://www.atguigu.com">单机游戏</a>
                <a href="http://www.atguigu.com">网络游戏</a>
            </div>
        </Category>
        <Category title="电影">
            <!-- <video controls src="https://www.bilibili.com/video/BV1pZ4y1o7gF?t=5.6" ></video> -->

            <ul slot="center" v-for="(item, index) in films" :key="index">
            <li>{{item}}</li>
            </ul>     
            <!-- 新写法！！！！！！ -->
            <template v-slot:footer>
                <p>source1</p>
                <p>source2</p>
                <p>source3</p>
                <h4>欢迎前来观影</h4>
            </template>
            
            <!-- 不显示！！ -->
            <h4 slot="footer">欢迎前来观影</h4> 
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
.container, .foot{
    display: flex;
    justify-content: space-around;
}
img, video{
    width: 150px;
    display: block;
    margin: 0px auto;
}
</style>