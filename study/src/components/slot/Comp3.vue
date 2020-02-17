<!--
 * @Author: your name
 * @Date: 2020-02-07 19:46:22
 * @LastEditTime : 2020-02-07 20:00:54
 * @LastEditors  : Please set LastEditors
 * @Description: 作用域插槽
 * @FilePath: \vue-study\vue_study\src\components\slot\Comp3.vue
 -->
<template>
    <div>
        <h3>作用域插槽</h3>
        <!-- 通过绑定指定作用域 -->
        <slot :foo="foo"></slot>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return {
            foo:'bar'
        }
    },
    components:{},
    methods:{}
}
</script>
<style scoped>
</style>