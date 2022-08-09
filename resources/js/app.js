require('./bootstrap');

// import VueRouter from "vue-router";
import { createApp } from "vue";
import { createStore } from 'vuex';
import router from '../js/router';
import FrontendMaster from './components/frontend/FrontendMaster';
import Home from './components/frontend/master';
import VueLazyload from 'vue-lazyload';

import storeDate from './store/index.js';
import module from './store/module.js';

const store = createStore({
    modules:{
        module,
        storeDate
    }
});

// 5. Create and mount the root instance.
const app = createApp({
    components: {
        Home,
        FrontendMaster
    },
});

app
.use(router)
.use(VueLazyload)
.use(store)
.mount("#app");
