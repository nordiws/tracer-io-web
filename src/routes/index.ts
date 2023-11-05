import HelloWorldVue from "../components/HelloWorld.vue"
import { createRouter, createWebHashHistory } from "vue-router"


const Login = { template: '<div>Login</div>' }

const routes = [
    { path: '/', component: HelloWorldVue },
    { path: '/login', component: Login },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
