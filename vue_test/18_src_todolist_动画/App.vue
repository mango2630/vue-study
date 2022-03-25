<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader @addTodo='addTodo'></MyHeader>
                <Lists :todos='todos'></Lists>

                <MyFooter 
                :todos='todos' 
                @changeAllDone="changeAllDone"
                @clearAllDone="clearAllDone"></MyFooter>
            </div>
        </div>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
import MyHeader from './components/MyHeader'
import Lists from './components/Lists'
import MyFooter from './components/MyFooter'

export default {
    name: 'App',
    data() {
        return {
            todos:JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    components: {
        MyHeader,
        Lists,
        MyFooter, 
    },
    methods: {
        addTodo(todoObj){
            this.todos.unshift(todoObj)
        },
        checkTodo(msgName, id){
            this.todos.forEach((todoObj)=>{
                if(todoObj.id === id){
                    todoObj.done = !todoObj.done;
                    console.log(todoObj);
                }
            })
        },
        deleteTodo(msgName, id){
            this.todos = this.todos.filter((todo)=>{
                return todo.id !== id;
            })
        },
        changeAllDone(value){
            console.log(value);
            if(value){
                // 全选
                this.todos.forEach((todoObj)=>{
                    todoObj.done = true;
                })
            }else{
                this.todos.forEach((todoObj)=>{
                    todoObj.done = false;
                })
            }
        },
        clearAllDone(){
            this.todos = this.todos.filter((todo)=>{
                return todo.done === false;
            })
        },
        updateTodo(id, title){
            this.todos.forEach((todoObj)=>{
                if(todoObj.id === id){
                    todoObj.title = title;
                    console.log(todoObj);
                }
            })
        }
    },
    watch:{
        todos: {
            // 深度监视！！！！！！【done】
            deep:true,
            handler(value){
                localStorage.setItem('todos', JSON.stringify(value))
            }
        }
    },
    mounted(){
        // 绑定全局事件总线
        // this.$bus.$on('checkTodo', this.checkTodo);
        // this.$bus.$on('deleteTodo', this.deleteTodo);
        this.$bus.$on('updateTodo', this.updateTodo)
        this.id1 = pubsub.subscribe('checkTodo', this.checkTodo)
        this.id2 = pubsub.subscribe('deleteTodo', this.deleteTodo)
    },
    beforeDestroy(){
        // this.$bus.$off('checkTodo');
        // this.$bus.$off('deleteTodo');
        pubsub.unsubscribe(this.id1)
        pubsub.unsubscribe(this.id2)
    }
}
</script>

<style>
body{
    background-color: #fff;
}
.btn{
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}
.btn-edit{
    color: #fff;
    background-color: #068f0d;
    border: 1px solid #2fbd6a;
}
.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}
.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}
.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
}
</style>