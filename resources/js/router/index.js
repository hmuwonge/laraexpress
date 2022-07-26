import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/frontend/master'
import Main from '../components/Index.vue'
import ProductDetails from '../components/productDetails/ProductDetailes.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Main,
        meta:{
            title: document.title,
            transition: 'slide-left'
        }
    },
    {
        path:'/product/:slug',
        name: 'product.details',
        component: ProductDetails
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
