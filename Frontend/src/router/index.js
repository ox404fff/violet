import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue'
import Stretching from '../views/Stretching.vue'
import Ballet from "../views/Ballet.vue";
import Child from "../views/Child.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/ballet',
            name: 'ballet',
            component: Ballet
        },
        {
            path: '/stretching',
            name: 'stretching',
            component: Stretching
        },
        {
            path: '/child',
            name: 'child',
            component: Child
        }
    ]
})

