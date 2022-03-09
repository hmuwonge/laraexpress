require('./bootstrap');

// import VueRouter from "vue-router";
import { createApp } from "vue";
import router from '../js/router';
import Shop from './components/theShop.vue'
// 5. Create and mount the root instance.
const app = createApp({
    components: {
        Shop
    },
});

app.use(router).mount("#app");
