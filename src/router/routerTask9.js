import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/tasks",
            component: () => import("../views/Task9/Tasks.vue"),
            alias : "/"
            
        },
        {
            path: "/new",
            component: () => import("../views/Task9/New.vue")
        },
        {
            path: "/task/:id?",
            component: () => import("../views/Task9/Task.vue"),
            name: "task"
            // children: [
            //     {
            //         path: ":mailId?",
            //         component: () => import("../components/Task8/AppEmailBody.vue"),
            //         props: true
            //     }]
        },
       
        {
            path: "/:notFound(.*)",component: () => import("../components/Task8/NotFound.vue")
        }
    ],
    linkActiveClass: "active",
    linkExactActiveClass: "active"
})

 
export default router;