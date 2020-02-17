<!--
 * @Author: your name
 * @Date: 2020-02-07 10:24:49
 * @LastEditTime : 2020-02-10 09:08:32
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\components\form\index.vue
 -->
<template>
  <div>
    <h3>element表单</h3>
    <hr />
    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username" autocomplete="off" placeholeder="请输入用户名"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input v-model="model.password" autocomplete="off" placeholeder="请输入密码"></k-input>
      </k-form-item>
       <k-form-item label="课程" prop="kc">
        <k-checkbox v-model="model.kc" ></k-checkbox>
      </k-form-item>
      <k-form-item>
        <button @click="submitForm('loginForm')">提交</button>
      </k-form-item>
    </k-form>
  </div>
</template>
<script>
import KForm from "./Form";
import KFormItem from "./FormItem";
import KInput from "./Input";
import KCheckbox from './Checkbox'
import KNotice from '../notice/KNotice'
import create from '../../utils/create.js'
export default {
  name: "",
  data() {
    return {
      model: { username: "tom", password: "" ,ck:[]},
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }],
        
      }
    };
  },
  components: {
      KForm,
      KFormItem,
      KInput,
      KCheckbox
      
  },
  methods: {
      submitForm(form){
          this.$refs[form].validate(valid=>{
             const notice = create(KNotice,{
                 title:'提示',
                 message:valid?'请求登录':'校验失败',
                 duration:1000
             })
          notice.show();
          });
      }
  }
};
</script>
<style scoped>
</style>