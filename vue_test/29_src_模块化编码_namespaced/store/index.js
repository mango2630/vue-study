// 该文件用于传创建vuex中最为核心的store

import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

Vue.use(Vuex);

// 求和相关的配置
const countOptions = {
    namespaced: true,
    actions:{
        /* jia: function(context, value){
            context.commit('JIA', value)
        }, */
        jian: function(context, value){
            context.commit('JIAN', value)
        },
        jiaOdd: function(context, value){
            if(context.state.sum % 2){
                context.commit('JIA', value);
            }
        },
        jiaWait: function(context, value){
            setTimeout(()=>{
                context.commit('JIA', value)
            }, 500)
        },
    },
    mutations: {
        JIA(state, value){
            console.log('mutations---JIA', state, value);
            state.sum += value;
        },
        JIAN(state, value){
            console.log('mutations---JIA', state, value);
            state.sum -= value;
        },
    },
    state: {
        sum: 0, 
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state){
            return state.sum * 10;
        }
    }
}

const personOptions = {
    namespaced: true,
    actions: {
        add(context, value){
            context.commit('ADD', value)
        }
    },
    mutations: {
        ADD(state, value){
            state.personList.unshift(value);
        }
    },
    state: {
        personList: [
            {id:'001', name:'denny'},
            {id:'002', name:'jenny'}
        ]
    },
    getters: {
        
    }
}

const store = new Vuex.Store({
    modules:{
        countAbout: countOptions,
        personAbout: personOptions
    }
});


// 暴露store
export default store;