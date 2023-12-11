import HelloWorld from "../components/HelloWorld.vue"
import { createRouter, createWebHashHistory } from "vue-router"
import Login from "../pages/login.vue"


const routes = [
    { path: '/', component: HelloWorld },
    { path: '/login', component: Login },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.afterEach((to) => {
    console.log("afterEach", to);
})
