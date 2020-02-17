<!--
 * @Author: your name
 * @Date: 2020-02-07 12:03:05
 * @LastEditTime : 2020-02-07 12:28:15
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\components\notice\KNotice.vue
 -->
<template>
    <div class="box" v-if="isShow">
        <h3>{{title}}</h3>
        <p class="box-content">{{message}}</p>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return {
            isShow:false
        }
    },
    props:{
        title:{
            type:String,
            default:'',
        },
        message:{
            type:String,
            default:'',
        },
        duration:{
            type:Number,
            default:1000,
        }
    },
    components:{},
    methods:{
        show(){
            this.isShow = true;
            setTimeout(this.hide,this.duration);
        },
        hide(){
            this.isShow = false;
            this.remove();
        }
    }
}
</script>
<style scoped>
.box{
    border: 1px solid;
    background: #ccc;
    text-align: center;
    position: absolute;
    width: 100%;
    top: 20px;
}
</style>