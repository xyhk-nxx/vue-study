<!--
 * @Author: your name
 * @Date: 2020-02-07 20:24:57
 * @LastEditTime : 2020-02-07 22:07:16
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\components\communicate\Child1.vue
 -->
<template>
    <div>
        <h2>Child1</h2>
        <p>{{title}}</p>
        <h3>{{msg}}</h3>
        <button @click="toParent">传递到父元素</button>
        <button @click="$boardcast('boardcast','我是child1')">广播子元素</button>
        <Grand-child1></Grand-child1>
        <Grand-child2></Grand-child2>
    </div>
</template>
<script>
import GrandChild1 from './GrandChild1'
import GrandChild2 from './GrandChild2'
export default {
    name:'Child1',
    props:['title'],
    data(){
        return {
            msg:''
        }
    },
    components:{
        GrandChild1,
        GrandChild2
    },
    methods:{
        toParent(){
            this.$emit('getmsg','爸爸，我知道错了')
        }
    },
    mounted(){
        this.$on('dispatch',msg=>{
            this.msg="接受dispatch消息："+msg;
        })
        this.$bus.$on('event-bus',msg=>{
            this.msg="接受event-bus消息:"+msg
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