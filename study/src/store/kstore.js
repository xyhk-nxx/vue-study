/*
 * @Author: your name
 * @Date: 2020-02-10 12:15:58
 * @LastEditTime: 2020-02-10 12:16:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\store\kstore.js
 */
import Vue from "vue";
import Vuex from "./kvuex";

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
  
});
