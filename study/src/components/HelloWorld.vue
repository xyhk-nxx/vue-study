<!--
 * @Author: your name
 * @Date: 2020-02-07 10:15:42
 * @LastEditTime: 2020-02-10 11:01:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\components\HelloWorld.vue
 -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
