<!--
 * @Author: your name
 * @Date: 2020-02-07 20:25:02
 * @LastEditTime : 2020-02-07 22:09:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\components\communicate\GrandChild2.vue
 -->
<template>
    <div>
        <h2>Grandson2</h2>
        <p>祖先元素提供的数据：{{woniu}}</p>
        <button @click="eventBus">$bus发布</button>
        <h3>{{msg}}</h3>
        <Grand-grand-child1></Grand-grand-child1>
    </div>
</template>
<script>
import GrandGrandChild1 from './GrandGrandChild1'
export default {
    name:'GrandChild2',
    inject:['woniu'],
    data(){
        return {
            msg:''
        }
    },
    components:{
        GrandGrandChild1
    },
    methods:{
        eventBus(){
            this.$bus.$emit('event-bus',"测试eventBus")
        }
    },
    mounted(){
         this.$on('dispatch',msg=>{
            this.msg="接受dispatch消息:"+msg
        })
        this.$on("boardcast",msg=>{
            this.msg="介绍boardcast消息："+msg
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