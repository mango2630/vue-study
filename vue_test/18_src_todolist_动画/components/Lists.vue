<template>
    <div>
        <ul class="todo-main">
            <transition-group name="todo" appear>
                <Item v-for="item in todos" :todo="item" 
                :key="item.id">
                    {{item.title}}
                </Item>
            </transition-group>
        </ul>
    </div>
</template>

<script>
import Item from './Item'
export default {
    name: 'Lists',
    components: {
        Item
    },
    data(){
        return {
            
        }
    },
    props: ['todos']
}
</script>

<style>
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}

.todo-enter-active{
		animation: atguigu 0.5s linear;
	}

	.todo-leave-active{
		animation: atguigu 0.5s linear reverse;
	}

	@keyframes atguigu {
		from{
			transform: translateX(100%);
		}
		to{
			transform: translateX(0px);
		}
	}
</style>