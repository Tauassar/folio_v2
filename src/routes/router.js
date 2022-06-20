import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "@/pages/MainPage";

// Each route should map to a component.
const routes = [
    { path: '/', component: MainPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router
