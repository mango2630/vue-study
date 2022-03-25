<template>
    <div>
        <ul>
            <li :style="{opacity}">欢迎学习Vue</li>
            <li>news001</li><input type="text">
            <li>news002</li><input type="text">
            <li>news003</li><input type="text">
        </ul>
    </div>
</template>

<script>
export default {
    name: 'News',
    data(){
        return {
            opacity: 1
        }
    },
    /* mounted(){
        this.timer = setInterval(()=>{
            this.opacity -= 0.01;
            if(this.opacity <= 0){
                this.opacity = 1;
            }
        }, 18)
    },
    beforeDestroy(){
        clearInterval(this.timer)
    } */

    // 路由组件独有！！！   
    activated(){
        console.log('News组件被激活');
        this.timer = setInterval(()=>{
            this.opacity -= 0.01;
            if(this.opacity <= 0){
                this.opacity = 1;
            }
        }, 18)
    },
    deactivated(){
        console.log('News组件失活');
        clearInterval(this.timer);
    }
}
</script>

<style>

</style>