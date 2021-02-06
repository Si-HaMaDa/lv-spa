import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';

Vue.use(VueRouter);

const baseUrl = '/lv-spa/public';

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [{
            path: baseUrl + '/',
            name: 'home',
            component: Home
        },
        {
            path: baseUrl + '/about',
            name: 'about',
            component: About
        },
    ]
});

export default router;
