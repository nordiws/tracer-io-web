import HelloWorld from "../components/HelloWorld.vue"
import { createRouter, createWebHashHistory } from "vue-router"


const Login = { template: '<div>Login</div>' }

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/login', component: Login },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.afterEach((to) => {
    console.log(to);
})