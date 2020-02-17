/*
 * @Author: your name
 * @Date: 2020-02-10 11:50:46
 * @LastEditTime : 2020-02-10 12:25:28
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\store\kvuex.js
 */
// 1.插件 install
// 2.实现四个方法 states /mutations /actions /getters
// 3.数据响应式 
let Vue;
class Store{
    constructor(options){
        this.state = new Vue({
            data:options.state
        })
        this.mutations = options.mutations;
        this.actions = options.actions;
        options.getters && this.handleGetters(options.getters)
    }
    // 箭头函数，this指向发生变化时，还是指向store实例
    commit = (type,arg)=>{
        this.mutations[type](this.state,arg)
    }
    dispatch(type,arg){
        // 需要构造上下文
        this.actions[type]({
            commit:this.commit,
            state:this.state
        },arg)
    }
    handleGetters(getters){
        // getters 不加this 是形参。加this 是当前Store的成员变量
        this.getters ={}
        // 遍历getters的所以key
        Object.keys(getters).forEach(key=>{
            // 为this.getters定义若干属性，这些属性是制度的
            Object.defineProperty(this.getters,key,{
                get:()=>{
                    return getters[key](this.state)
                }
            })
        })
    }

}
function install(_Vue){
    Vue = _Vue;
    Vue.mixin({
        beforeCreate(){
            if(this.$options.store){
                Vue.prototype.$store = this.$options.store;
            }
        }
    })
}

export default {Store,install}
