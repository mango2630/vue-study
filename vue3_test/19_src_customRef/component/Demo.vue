<template>
    <input type="text" v-model="keyword">
    <h3>{{keyword}}</h3>
</template>

<script>
/* 
    customRef:自定义Ref
        - 创建一个自定义的ref,并对其依赖项跟踪和更新触发进行显示控制。
        - 实现防抖效果。

*/
import {customRef} from 'vue'
export default {
    name: 'Demo',
    setup() {

        // 使用vue提供的ref
        // let keyword = ref('hello');

        // 自定义ref
        function myRef(value){
            let timer;
            const x = customRef((track, trigger)=>{
                return {
                    get(){
                        track();//!!!
                        return value;
                    },
                    set(newValue){
                        value = newValue;

                        clearTimeout(timer)

                        // 通知vue重新解析模板
                        timer = setTimeout(()=>{
                            trigger();
                        }, 500)
                    }
                }
            });
            
            return x;
        }
        // 自定义ref
        let keyword = myRef('hello');

        return {
            keyword
        }
    },
}
</script>

<style>

</style>