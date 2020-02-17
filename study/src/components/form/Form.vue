<!--
 * @Author: your name
 * @Date: 2020-02-07 10:24:03
 * @LastEditTime : 2020-02-07 11:37:32
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\components\form\Form.vue
 -->
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "",
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    validate(cb) {
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate());
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>
<style scoped>
</style>