import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import Home from '../src/components/Home.vue'
import Navbar from '../src/components/navbar.vue'
import Login from '../src/components/Login.vue'
import Register from '@/components/Register.vue'
import Upload from '@/components/Upload.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login/',
        name: 'Login',
        component: Login
    },
    {
        path: '/upload/',
        name: 'Upload',
        component: Upload
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior(to, from, savedPosition) {
        if(to.hash){
            return{
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }
})

export default router