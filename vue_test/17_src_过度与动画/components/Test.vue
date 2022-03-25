<template>
    <div>
        <button @click="isShow = !isShow" >显示/隐藏</button>
        <transition :appear="true">
            <h1 v-show='isShow'>你好啊！！</h1>
        </transition>
        <transition name='hello' appear>
            <h1 v-show='isShow'>你好啊！！</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data(){
        return {
            isShow: true,
        }
    }
}
</script>

<style scoped>
/* 动画实现 */

h1{
    background-color: brown;
}

.v-enter-active{
    animation: atguigu 1s;
}
.v-leave-active{
    animation: atguigu 1s reverse;
}

.hello-enter-active{
    animation: atguigu 1s;
}
.hello-leave-active{
    animation: atguigu 1s reverse;
}

@keyframes atguigu {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>