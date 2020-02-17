<!--
 * @Author: your name
 * @Date: 2020-02-07 10:24:20
 * @LastEditTime : 2020-02-10 09:09:00
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\components\form\Input.vue
 -->
<template>
  <div>
    <input type="checkbox" :value="value" @change="onInput" v-bind="$attrs" />
  </div>
</template>
<script>
export default {
  name: "",
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    onInput(e) {
      this.$emit("checkbox", e.target.checked);
    }
  }
};
</script>
<style scoped>
</style>