<template>
    <div>
        <Node :data="data" />
    </div>
</template>
<script>
import Node from './Node'
export default {
    name:'',
    data(){
        return {
            data:{
                id:1,
                title:'递归组件',
                children:[
                {id:11,title:'aaa', },
                {id:12,title:'bbb', },
                ]
            }
        }
    },
    components:{
        Node
    },
    methods:{}
}
</script>
<style scoped>
</style>