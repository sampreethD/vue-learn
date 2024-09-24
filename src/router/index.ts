import {createRouter, createWebHistory} from 'vue-router';
import App from '../App.vue'
import Landing from '/src/components/Landing.vue'
import Dashboard from '/src/views/Dashboard.vue'

const routes = [
    {
        path: '',
        name: 'landing',
        component: Dashboard
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;