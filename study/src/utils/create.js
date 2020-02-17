/*
 * @Author: your name
 * @Date: 2020-02-07 12:03:45
 * @LastEditTime : 2020-02-07 12:24:34
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\utils\create.js
 */
import Vue from 'vue'
export default function create(Component,props){
    const vm = new Vue({
        render(h){
            return h(Component,{props})
        }
    }).$mount();

    // 手动挂宅
    document.body.appendChild(vm.$el);
    // 销毁方法

    const comp = vm.$children[0];
    comp.remove = function(){
        document.body.removeChild(vm.$el);
        vm.$destroy();
    }

    return comp
}