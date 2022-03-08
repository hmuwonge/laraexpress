import { createRouter, createWebHistory } from 'vue-router'

import Index from '../components/Index'

const routes = [
    {
        path: '/theshop/',
        name: 'home',
        component: Index
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
