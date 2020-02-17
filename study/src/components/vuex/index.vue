<!--
 * @Author: your name
 * @Date: 2020-02-10 11:19:24
 * @LastEditTime : 2020-02-10 11:44:05
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\components\vuex\index.vue
 -->
<template>
    <div>
        <div>冲啊，手榴弹扔了{{$store.state.count}}</div>
        <p>{{$store.getters.score}}</p>
        <button @click="add">扔一个</button>
        <button @click="addAsync">蓄力仍两</button>
        
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return {}
    },
    components:{},
    methods:{
        add(){
            this.$store.commit('increment')
        },
        addAsync(){
            this.$store.dispatch('incrementAsync')
        }
    }
}
</script>
<style scoped>
</style>