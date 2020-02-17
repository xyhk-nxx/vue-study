/*
 * @Author: your name
 * @Date: 2020-02-10 10:25:31
 * @LastEditTime : 2020-02-10 10:59:19
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\router\krouter.js
 */
// 1.插件
// 2.url监听变化
// 3.路由配置解析：{'/':Home}
// 4.实现全局组件：router-link router-view
import Vue from "vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

class VueRouter {
    init(){
        this.bindEvents();//监听url变化
        this.createRouteMap(this.$options);//解析路由配置
        this.initComponent()//实现两个组件
    }
    constructor(options){
        this.$options = options;
        this.routeMap = {}
        
        // 当前路由的响应式
        this.app = new Vue({
            data:{
                current:'/'
            }
        })
    }

    bindEvents(){
        window.addEventListener('load',this.onHashChange.bind(this))
        // .bind(this) 确保该回调函数的指向是当前实例，而不是window
        window.addEventListener('hashchange',this.onHashChange.bind(this))
    }
    onHashChange(){
        this.app.current = window.location.hash.slice(1) || '/'
    }
    createRouteMap(options){
        options.routes.forEach(item=>{
            this.routeMap[item.path] = item.component;
        })
    }
    initComponent(){
        // router-link router-view
        // <router-link to="">fff</router-link>
        Vue.component('router-link',{
            props:{to:String},
            // 该过程发生在webpack打包过程中，无法完成编译
            // h(tag,data,children)
            // this.$slots.default ==>fff
            render(h){
                return h('a',{attrs:{href:'#'+this.to}},[this.$slots.default])
            }
        })
        Vue.component('router-view',{
            // 箭头函数，根据路径生产组件
            //  this 指当前router的实例
            render:(h)=>{
                const comp = this.routeMap[this.app.current]
                return h(comp)
            }
        })
    }
}
// 让VueRouter成为一个插件：实现一个install方法
VueRouter.install=function(Vue){
    // 混入 和生命周期中组件的钩子一块执行
    Vue.mixin({
        beforeCreate(){
            if (this.$options.router) {
                // 这里的this是当前vue实例
                Vue.prototype.$router = this.$options.router;
                this.$options.router.init();
            }
        }
    })
}




// Vue使用use时，调用VueRouter的install方法，并将自己作为参数传入
Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {path:'/',component:Home},
        {path:'/about',component:About},
    ]
})