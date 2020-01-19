import VueRouter from 'vue-router';
import Vue from 'vue';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobView from '../views/JobView.vue'
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';



Vue.use(VueRouter);

export const router=new VueRouter({
    mode:'history',
    routes:[
        {
            path:"/",
            redirect:"/news"
        },
        {
            path:"/news",
            component:NewsView
        },
        {
            path:"/ask",
            component:AskView,
        },
        {
            path:"/jobs",
            component:JobView,
        },
        {
            path:"/user",
            component:UserView,
        },
        {
            path:"/item",
            component:ItemView,
        },
    ],
});


