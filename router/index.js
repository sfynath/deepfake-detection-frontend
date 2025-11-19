import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '../src/components/Home.vue'
import Navbar from '../src/components/navbar.vue'
import Login from '../src/components/Login.vue'
import Register from '@/components/Register.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router