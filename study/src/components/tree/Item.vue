<!--
 * @Author: your name
 * @Date: 2020-02-07 19:04:09
 * @LastEditTime : 2020-02-07 19:37:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\components\tree\Item.vue
 -->
<template>
    <li>
        <div @click="toggle">
            {{model.title}}
            <span v-if="isFolder">[{{open?'-':'+'}}]</span>
        </div>
        <ul v-show="open" v-if="isFolder">
            <Item class="item" v-for="model in model.children" :model="model" :key="model.title" />

        </ul>
    </li>
</template>
<script>
export default {
    props:{
        model:Object,
        
    },
    name:'Item',
    data(){
        return {
            open:false
        }
    },
    computed:{
        isFolder(){
            return this.model.children && this.model.children.length
        }
    },
    components:{},
    methods:{
        toggle(){
            if(this.isFolder){
                this.open = !this.open
            }
        }
    }
}
</script>
<style scoped>
</style>