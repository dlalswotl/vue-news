import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItem } from '../api'
export default {
    FETCH_NEWS({commit}){
        fetchNewsList()
        .then(({data})=>{
            commit('SET_NEWS',data);
        });
    },

    FETCH_JOBS({commit}){
        fetchJobsList()
        .then(({data})=>{
            commit('SET_JOBS',data);
        });
    },

    FETCH_ASKS({commit}){
        fetchAskList()
        .then(({data})=>{
            commit('SET_ASKS',data);
        });
    },
    FETCH_USER({commit},user){
        fetchUserInfo(user)
        .then(({data})=>{
            commit('SET_USER',data);
        })
    },
    FETCH_ITEM({commit},id){
        fetchItem(id)
        .then(({data})=>{
            commit('SET_ITEM',data);
        })
    }
    
} 