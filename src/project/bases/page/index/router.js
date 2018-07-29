/**
 * Created by lcfevr on 16/8/22.
 */


const routers = [
    {
        path:'/',
        redirect:'/guide'
    },
    {
        path:'/guide',
        name:'guide',
        component:resolve => require(['./index.vue'], resolve),
        meta:{
            title:'导航',
            depth:20
        }
    },
    {
        path:'/index',
        name:'index',
        component:resolve => require(['./main.vue'], resolve),
        meta:{
            title:'主页',
            depth:30
        }
    }
]
export default routers;
