/*
 * @Author: your name
 * @Date: 2020-02-07 10:15:42
 * @LastEditTime : 2020-02-10 12:17:43
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/krouter";
// import router from "./router";
// import store from "./store";
import store from "./store/kstore";

Vue.config.productionTip = false;

Vue.prototype.$dispatch = function(eventName,data){
  let parent = this.$parent;
  // 查找父元素
  while(parent){
    if (parent) {
      // 父元素用$emit触发
      parent.$emit(eventName,data);
      parent = parent.$parent
    }else{
      break;
    }
  }
}

Vue.prototype.$boardcast = function(eventName,data){
  boardcast.call(this,eventName,data)
}
function boardcast(eventName,data){
  this.$children.forEach(child=>{
    // 子元素触发$emit
    child.$emit(eventName,data);
    if (child.$children.length) {
      boardcast.call(child,eventName,data)
    }
  })
}


class Bus {
  constructor(){

    this.callbacks = {}
  }
  $on(name,fn){
    this.callbacks[name] = this.callbacks[name]||[];
    this.callbacks[name].push(fn);
  }
  $emit(name,args){
    if (this.callbacks[name]) {
      // 存在 遍历所有的callback
      this.callbacks[name].forEach(cb=>cb(args))
    }
  }
}

Vue.prototype.$bus = new Bus();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
