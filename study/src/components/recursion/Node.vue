<!--
 * @Author: your name
 * @Date: 2020-02-07 20:11:45
 * @LastEditTime : 2020-02-07 20:20:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\components\recursion\index.vue
 -->
<template>
    <div>
        <h3>{{data.title}}</h3>
        <!-- 必须有结束条件 -->
        <Node v-for="d in data.children" :key="d.id" :data="d"/>
    </div>
</template>
<script>
export default {
    name:'Node', //name对递归组件是必须的
    props:{
         data:{
                type:Object,
                require:true
            }
    },
    data(){
        return {
           
        }
    },
    components:{},
    methods:{}
}
</script>
<style scoped>
</style>