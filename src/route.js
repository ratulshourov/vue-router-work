import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from './components/AboutPage.vue';
import HomePage from './components/HomePage.vue';
import HelloWorld from './components/HelloWorld.vue';
import NoRoute from './components/NoRoute.vue';

const routes = [
    {
        name: 'HelloWorld',
        path: '/',
        component: HelloWorld
    },
    {
        name: 'HomePage',
        path: '/home',
        component: HomePage
    },
    {
        name: 'About',
        path: '/about',
        component: AboutPage
    },
    {
        name: 'NoRoute',
        path: '/:notFound',
        component: NoRoute
    },
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;