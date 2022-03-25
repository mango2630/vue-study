import {reactive, onMounted, onBeforeUnmount} from 'vue'
function saveP(){
    let point = reactive({
        x: 0,
        y: 0
    })
    function savePoint(event){
        console.log(event);
        point.x = event.pageX;
        point.y = event.pageY;
    }
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })
    onBeforeUnmount(()=>{
        // 卸载监听事件
        window.removeEventListener('click', savePoint)
    })

    return point;
}

export default saveP;