<template>
    <div>
        <button @click="isShow = true">点我弹窗</button>
        <teleport to='body'>
            <div v-if="isShow"  class="mask">
                <div class="dialog">
                <h4>我是弹窗</h4>
                <h5>xxxxx</h5>
                <h5>xxxxx</h5>
                <h5>xxxxx</h5>
                <h5>xxxxx</h5>

                <button @click="isShow = false">关闭弹窗</button>
            </div>
        </div>
        </teleport>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'Dialog',
    setup(){
        let isShow = ref(false);

        return {isShow}
    }
}
</script>

<style>
.mask{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.123);
}
.dialog{
    width: 100px;
    height: 300px;
    background-color: blue;
}
</style>