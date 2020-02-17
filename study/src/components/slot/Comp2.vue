<!--
 * @Author: your name
 * @Date: 2020-02-07 19:46:23
 * @LastEditTime : 2020-02-07 19:59:22
 * @LastEditors  : Please set LastEditors
 * @Description: 具名插槽
 * @FilePath: \vue-study\vue_study\src\components\slot\Comp2.vue
 -->
<template>
    <div>
        <h3>
            <slot></slot>
        </h3>
        <slot name="content"></slot>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return {}
    },
    components:{},
    methods:{}
}
</script>
<style scoped>
</style>