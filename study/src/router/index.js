/*
 * @Author: your name
 * @Date: 2020-02-07 10:15:42
 * @LastEditTime : 2020-02-10 10:12:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import List from '../views/List'
import Detail from '../views/Detail'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children:[{path:'/list',name:'list',component:List},
    {path:'/detail/:id',name:'detail',component:Detail,props:true,}]
  },
  {
    path: "/about",
    name: "about",
    meta:{auth:true},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  // routes
});

router.addRoutes(routes)

// 后台获取路由开始
// api.getRoutes().then(routes=>{
//   const routeConfig = rotues.map(route=>mapComponent(route))
//   router.addRoutes(routeConfig)
// })
// const compMap = {
//   'Home':()=>import ('./views/Home')
// }
// function mapComponent(route){
//   route.component = compMap[route.component]
//   if(route.children){
//     route.children = route.children.map(child=>mapComponent(child))
//   }
// }
// 后台获取路由结束

// 面包屑(组件)
// watch:{
//   $route(){
//     console.log(this.$route.matched);
//     this.crumbData = this.$route.matched.map(m=>m.name)
    
//   }
// }

router.beforeEach((to,from,next)=>{
  if (to.meta.auth && !window.isLogin) {
    if(window.confirm("请登录")){
      window.isLogin=true;
      next();
    }else{
      next('/')
    }
  }else{
    next()
  }
})

export default router;
