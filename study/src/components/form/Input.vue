<!--
 * @Author: your name
 * @Date: 2020-02-07 10:24:20
 * @LastEditTime : 2020-02-07 10:59:45
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\components\form\Input.vue
 -->
<template>
  <div>
    <input type="text" :value="value" @input="onInput" v-bind="$attrs" />
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
      this.$emit("input", e.target.value);
      this.$parent.$emit('validate');
    }
  }
};
</script>
<style scoped>
</style>