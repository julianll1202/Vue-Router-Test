import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                enterClass: "animate__animated animate__fadeInLeft",
                leaveClass: "animate__animated animate__fadeOutLeft",
            }
        },
        {
            path: '/about',
            component: About,
            meta: {
                enterClass: "animate__animated animate__bounce",
                leaveClass: "animate__animated animate__fadeOutLeft",
            }
        },
    ]
})

export default router