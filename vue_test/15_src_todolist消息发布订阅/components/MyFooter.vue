<template>
    <div class="todo-footer" v-show='total'>
        <label>
            <input type="checkbox" :checked='isAll'
            @change="checkAll"/>
        </label>
        <span>
            <span>已完成{{doneTotal}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" @click='clearDone'>清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos'],
    computed: {
        total(){
            return this.todos.length;
        },
        doneTotal(){

            // 方式一：
            /* let i = 0;
            this.todos.forEach(todo => {
                if(todo.done) i ++;
            });
            return i; */

            // 方式二：reduce
            return this.todos.reduce((pre, current)=>{
                return pre + (current.done ? 1 : 0);
            }, 0)
        },
        isAll(){
            return this.doneTotal === this.total && this.total > 0;
        }
    },
    methods:{
        checkAll(event){
            // this.changeAllDone(event.target.checked)
            this.$emit('changeAllDone', event.target.checked)
        },
        clearDone(){
            if(confirm('确定清楚所有完成的？')){
                // this.clearAllDone();
                this.$emit('clearAllDone')
            }
        }
    }
}
</script>

<style>
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}

</style>