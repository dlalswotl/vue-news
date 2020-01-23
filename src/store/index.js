import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex)
export const store=new Vuex.Store({
    state:{
        news:[],
        asks:[],
        jobs:[],
        user:{},
        item:{},
    },
    getters:{
        fetchedAsk(state){
            return state.asks;
        },

        UserInfo(state){
            return state.user
        },
        fetchedItem(state){
            return state.item;
        }
    },
    actions,
    mutations,
})
    