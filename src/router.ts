import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {

            path: '/home',
            component: HomePage
        },
        {
            path: '/login',
            component: LoginPage
        }
        ]
});

export default router;