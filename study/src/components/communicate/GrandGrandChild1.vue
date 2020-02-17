<!--
 * @Author: your name
 * @Date: 2020-02-07 20:25:01
 * @LastEditTime : 2020-02-07 22:19:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\components\communicate\GrandGrandChild1.vue
 -->
<template>
    <div>
        <h2>GrandGrandSon1</h2>
        <p>祖先元素提供的数据：{{woniu}}</p>
        <button @click="$dispatch('dispatch','hello !I am GrandGrandChild1')">dispatch</button>
        <h3>{{msg}}</h3>
    </div>
</template>
<script>
export default {
    name:'GrandGrandChild1',
    inject:['woniu'],
    data(){
        return {
            msg:''
        }
    },
    components:{},
    methods:{},
    mounted(){
         this.$on("boardcast",msg=>{
            this.msg="介绍boardcast消息："+msg
        })
         this.$bus.$on('event-bus',msg=>{
            this.msg="接受event-bus消息："+msg
        })
    }
}
</script>
<style scoped>
div{
    border: 3px solid blue;
    padding:10px;
    display: inline-block;
    vertical-align: top;
}
h1,h2{
    font-size: 18px;
    margin: 5px 0;
}
h3{
    color:red;
    font-size: 14px;
}
</style>