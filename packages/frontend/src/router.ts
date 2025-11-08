import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./views/About.vue')
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('./views/Contacts.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('./views/Projects.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;