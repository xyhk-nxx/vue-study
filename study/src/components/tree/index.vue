<!--
 * @Author: your name
 * @Date: 2020-02-07 19:03:58
 * @LastEditTime : 2020-02-07 19:21:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\components\tree\index.vue
 -->
<template>
    <div>
        <ul>
            <Item class="item" :model="treeData" />
        </ul>
    </div>
</template>
<script>
import Item from './Item'
export default {
    name:'',
    data(){
        return {
            treeData:{
                title:'web',
                children:[
                    {
                        title:'java'
                    },
                    {
                        title:'js',
                        children:[
                            {
                                title:'es6',
                            },{
                                title:'css'
                            }
                        ]
                    },
                    {
                        title:'ts',
                        children:[
                            {
                                title:'ts6',
                            },{
                                title:'scss'
                            }
                        ]
                    }
                ]
            }
        }
    },
    components:{
        Item
    },
    methods:{}
}
</script>
<style scoped>
</style>