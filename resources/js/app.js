require('./bootstrap');

// import VueRouter from "vue-router";
import { createApp } from "vue";
import router from '../js/router';
import FrontendMaster from './components/frontend/FrontendMaster';
import Home from './components/frontend/master';
import VueLazyload from 'vue-lazyload'

// import storeDate from './store/index.js'
// import module from './store/module.js'

// const store = new Vuex.Store({
//     modules:{
//         module,
//         storeDate
//     }
// });

// 5. Create and mount the root instance.
const app = createApp({
    components: {
        Home,
        FrontendMaster
    },
});

app.use(router).use(VueLazyload).mount("#app");
