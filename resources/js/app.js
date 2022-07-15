require('./bootstrap');

// import VueRouter from "vue-router";
import { createApp } from "vue";
import router from '../js/router';
import FrontendMaster from './components/frontend/FrontendMaster';
import Home from './components/frontend/master';

// 5. Create and mount the root instance.
const app = createApp({
    components: {
        Home,
        FrontendMaster
    },
});

app.use(router).mount("#app");
