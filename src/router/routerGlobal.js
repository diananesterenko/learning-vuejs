import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../App.vue"),
            
        },
        {
            path: "/task1",
            component: () => import("../App1.vue")
        },
        {
            path: "/app/:id",
            component: () => import("../DynamicTask.vue")
        },
        
        {
            path: "/:notFound(.*)",component: () => import("../components/Task8/NotFound.vue")
        },
        {
            path: '/task8',
            component: () => import('../Task8.vue'),
            children: [
                {
                path: '/app/8',
                redirect: '/task8/login',
                component: () => import('../views/Task8/Login.vue')
                },
                {
                path: 'login',
                component: () => import('../views/Task8/Login.vue')
                },
                {
                path: 'forget',
                component: () => import('../views/Task8/Forget.vue')
                },
                {
                path: 'mail',
                 name: 'mail',
                component: () => import('../views/Task8/Mail.vue'),
                children: [
                    {
                    path: ':mailId?',
                    component: () => import('../components/Task8/AppEmailBody.vue'),
                    props: true
                    }
                ]
                },
                {
                path: 'dashboard',
                component: () => import('../views/Task8/Dashboard.vue')
                },
                {
                path: ':notFound(.*)',
                component: () => import('../components/Task8/NotFound.vue')
                }
            ]
        },
        {
            path: '/app/9',
            redirect: '/task9/tasks'
        },
        {
            path: '/task9',
            component: () => import('../Task9.vue'),
            children: [
                
                {
                path: 'tasks',
                component: () => import("../views/Task9/Tasks.vue"),
                },
                {
                path: "new",
                component: () => import("../views/Task9/New.vue")
                },
                {
                path: "task/:id?",
                component: () => import("../views/Task9/Task.vue"),
                name: "task"
                },
                {
                path: ":notFound(.*)",component: () => import("../components/Task8/NotFound.vue")
                }
            ]
        }
        
        
    ],
    linkActiveClass: "active",
    linkExactActiveClass: "active"
})

 
export default router;