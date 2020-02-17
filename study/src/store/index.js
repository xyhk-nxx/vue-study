/*
 * @Author: your name
 * @Date: 2020-02-07 10:15:42
 * @LastEditTime : 2020-02-10 11:32:38
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {count:0},
  mutations: {
    increment(state,n=1){
      state.count+=n
    }
  },
  getters:{
    score(state){
      return `共扔出：${state.count}`
    }
  },
  actions: {
    // 复杂的业务逻辑类似controller
    incrementAsync({commit}){
      setTimeout(()=>{
        commit("increment",2)
      },1000)
    }
  },
  modules: {}
});
