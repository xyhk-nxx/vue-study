<!--
 * @Author: your name
 * @Date: 2020-02-07 20:25:01
 * @LastEditTime : 2020-02-07 21:28:49
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\components\communicate\Child2.vue
 -->
<template>
    <div>
        <h2>Child2</h2>
        <h3>{{msg}}</h3>
        <grand-child1></grand-child1>
    </div>
</template>
<script>
import GrandChild1 from './GrandChild1'
export default {
    name:'Child2',
    props:['title'],
    data(){
        return {
            msg:''
        }
    },
    components:{
        GrandChild1
    },
    methods:{
        
    },
    mounted(){
        this.$on('dispatch',msg=>{
            this.msg="接受dispatch消息："+msg;
        })
    }
}
</script>
<style scoped>
</style>