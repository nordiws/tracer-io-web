import VueRouter from "vue-router"
import HelloWorldVue from "../components/HelloWorld.vue"


const Login = { template: '<div>Login</div>' }

const routes = [
    { path: '/', component: HelloWorldVue },
    { path: '/login', component: Login },
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})
