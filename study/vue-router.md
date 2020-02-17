<!--
 * @Author: your name
 * @Date: 2020-02-10 09:24:21
 * @LastEditTime : 2020-02-10 10:17:10
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\vue-router.md
 -->
this.$router 访问路由器
this.$route 访问当前路由
$route.params 取参数
路由守卫
全局前置守卫
    router.beforeEach((to, from, next) => {
    // ...
    })
路由独享的守卫
    beforeEnter: (to, from, next) => {
        // ...
        }
组件内的守卫
    beforeRouteEnter
    beforeRouteUpdate (2.2 新增)
    beforeRouteLeave
完整的导航解析流程
    1.导航被触发。
    2.在失活的组件里调用离开守卫。
    3.调用全局的 beforeEach 守卫。
    4.在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
    5.在路由配置里调用 beforeEnter。
    6.解析异步路由组件。
    7.在被激活的组件里调用 beforeRouteEnter。
    8.调用全局的 beforeResolve 守卫 (2.5+)。
    9.导航被确认。
    10.调用全局的 afterEach 钩子。
    11.触发 DOM 更新。
    12.用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数
路由动态添加
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

 面包屑(组件)
// watch:{
//   $route(){
//     console.log(this.$route.matched);
//     this.crumbData = this.$route.matched.map(m=>m.name)
    
//   }
// }

