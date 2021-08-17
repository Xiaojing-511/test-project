/*
 * @Author: your name
 * @Date: 2021-06-13 23:03:54
 * @LastEditTime: 2021-08-04 14:58:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-project/src/router/index.js
 */
import {createRouter,createWebHashHistory} from 'vue-router';
const router = createRouter({
    history: createWebHashHistory(),// hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path:'/',
            redirect: '/chart'
        },
        {
            path:'/home/:id',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '@/components/HelloWorld.vue'),
            meta: {
                index: 1
            }
        },
        {
            path:'/test',
            name: 'test',
            component: ()=>import(/* webpackChunkName: "test" */ '@/components/Test.vue'),
            meta: {
                index: 1
            }
        },
        {
            path: '/g2plot',
            name: 'g2plot',
            component:()=>import(/* webpackChunkName: "g2plot" */ '@/components/g2plot.vue')
        },
        {
            path: '/echart',
            name: 'echart',
            component:()=>import(/* webpackChunkName: "echart" */ '@/components/echart.vue')
        },
        {
            path: '/g2Test',
            name: 'g2Test',
            component:()=>import(/* webpackChunkName: "g2Test" */ '@/components/g2Test.vue')
        }

    ]
})
export default router
