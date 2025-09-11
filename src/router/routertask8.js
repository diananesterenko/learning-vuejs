import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/login",
            component: () => import("../views/Task8/Login.vue"),
            alias : "/"
            
        },
        {
            path: "/forget",
            component: () => import("../views/Task8/Forget.vue")
        },
        {
            path: "/mail",
            component: () => import("../views/Task8/Mail.vue"),
            name: "mail",
            children: [
                {
                    path: ":mailId?",
                    component: () => import("../components/Task8/AppEmailBody.vue"),
                    props: true
                }]
        },
        {
            path:"/dashboard",
            component: () => import("../views/Task8/Dashboard.vue")
        },
        {
            path: "/:notFound(.*)",component: () => import("../components/Task8/NotFound.vue")
        }
    ],
    linkActiveClass: "active",
    linkExactActiveClass: "active"
})

 
export default router;