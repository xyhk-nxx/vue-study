<!--
 * @Author: your name
 * @Date: 2020-02-07 10:24:17
 * @LastEditTime : 2020-02-10 08:51:43
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\components\form\FormItem.vue
 -->
<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>
<script>
import Schema from 'async-validator'
export default {
  name: "",
  inject:['form'],
  props:{
      label:{
          type:String,
          default:'',
      },
      prop:{
          type:String
      }
  },
  data() {
    return {
        errorMessage:''
    };
  },
  mounted(){
      this.$on('validate',()=>{
        this.validate();
      })
  },
  components: {},
  methods: {
      validate(){
          let value = this.form.model[this.prop];
          let rules = this.form.rules[this.prop];
        const desc = {[this.prop]:rules}
        const schema = new Schema(desc)
        
        return schema.validate({[this.prop]:value},error=>{
            if (error) {
                this.errorMessage=error[0].message;
            } else {
                this.errorMessage=""
            }
        })
      }
  }
};
</script>
<style scoped>
</style>