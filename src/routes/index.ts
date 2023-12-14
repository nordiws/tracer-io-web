import HelloWorld from "../components/HelloWorld.vue"
import Strain from "../pages/strain.vue"
import Strains from "../pages/strains.vue"
import NotFound from "../pages/404.vue"
import { createRouter, createWebHashHistory } from "vue-router"
import Login from "../pages/login.vue"


const routes = [
    { path: '/', name: 'home-page', component: HelloWorld },
    { path: '/login', name: 'login', component: Login },
    { path: '/strain', name: 'strain', component: Strain },
    { path: '/strains', name: 'strains', component: Strains },
    { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFound },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.afterEach((to) => {
    console.log("afterEach", to);
})
