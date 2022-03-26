<template>
    <div class="container">
        <!-- 作用域插槽：使用者没有数据的时候使用 -->

        <!-- 无序列表 -->
        <Category title="游戏">
            <template scope="item">
                {{item}}
                <ul>
                    <li v-for="(item, index) in item.games" :key="index">{{item}}</li>
                </ul>
            </template>
        </Category>
        
        <!-- 有序列表 -->
        <Category title="游戏">
            <template scope="item">
                <!--  {{item}} -->
                <ol>
                    <li v-for="(item, index) in item.games" :key="index">{{item}}</li>
                </ol>
                <h4>{{item.msg}}</h4>
            </template>
        </Category>

        <!-- h4标题 -->
        <Category title="游戏">
            <!-- 解构赋值 -->
            <template scope="{games}">
                <!--  {{item}} -->
                <h4 v-for="(item, index) in games" :key="index">{{item}}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category'
export default {
    name: 'App',
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