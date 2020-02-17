<!--
 * @Author: your name
 * @Date: 2020-02-07 10:15:42
 * @LastEditTime : 2020-02-10 11:27:21
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\views\Home.vue
 -->
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Form /> -->
    <!-- <Tree /> -->
    <!-- <Slot /> -->
    <!-- <Recursion /> -->
    <!-- <Communicate /> -->
    <!-- <router-view></router-view> -->
    <VuexTest />
  </div>
</template>

<script>
// @ is an alias to /src

// import HelloWorld from "@/components/HelloWorld.vue";
// import Form from '@/components/form/index.vue'
// import Tree from '@/components/tree/index.vue'
// import Slot from '@/components/slot'
// import Recursion from '@/components/recursion'
// import Communicate from '@/components/communicate'
import VuexTest from '@/components/vuex'

export default {
  name: "home",
  components: {
    // HelloWorld
    // Form,
    // Tree,
    // Slot,
    // Recursion,
    // Communicate,
    VuexTest
  }
};
</script>
