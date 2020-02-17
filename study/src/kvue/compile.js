/*
 * @Author: your name
 * @Date: 2020-02-10 19:41:41
 * @LastEditTime : 2020-02-10 21:21:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-study\vue_study\src\kvue\compile.js
 */
// 遍历模版，将里面的插值表达式处理
// 另外如果发现k-xx @xx做特别处理
class Compile{
    constructor(el,vm){
        this.$vm=vm;
        this.$el = document.querySelector(el)

        if (this.$el) {
            // 1.将$el中的内容搬家到一个fragment，提高操作效率
            this.$fragment = this.node2Fragment(this.$el)
            console.log(this.$fragment);
            

            // 2.编译fragme
            this.compile(this.$fragment)

            // 3.将编译结果追加到宿主中
            this.$el.appendChild(this.$fragment)
        }
    }
    // 遍历而来把里面内容搬到新创建fragment
    node2Fragment(el){
        const fragment = document.createDocumentFragment();
        let child;
        while((child=el.firstChild)){
            // 由于appendChild是移动操作
            fragment.appendChild(child)
        }
        return fragment;
    }
    compile(el){
        // 遍历el
        const childNodes = el.childNodes;
        Array.from(childNodes).forEach(node=>{
            if (this.isElement(node)) {
                // console.log('编译元素'+node.nodeName);
                // 如果是元素节点，我们要处理k-xx 事件@xx
                this.compileElement(node)
                
            }else if(this.isInterpolation(node)){
                // console.log('编译文本'+ node.textContent);
                this.compileText(node)
                
            }

            // 递归子元素
            if (node.childNodes && node.childNodes.length>0) {
                this.compile(node)
            }
        })
    }
    isElement(node){
        return node.nodeType ===1;
    }
    // 插值表达式的判断
    isInterpolation(node){
        // 需要满足插值表达式 {{}}
        return node.nodeType ===3 && /\{\{(.*)\}\}/.test(node.textContent)
    }
    compileElement(node){
        //查看node 特性中是否有k-xx @xx
        const nodeAttrs = node.attributes;
        Array.from(nodeAttrs).forEach(attr=>{
            // 指令 k-xx k-text= 'abc
            const attrName = attr.name; //k-text
            const exp = attr.value; // abc
            if(attrName.indexOf('k-')===0){
                const dir = attrName.substring(2);
                this[dir] && this[dir](node,this.$vm,exp);
            }else if(attrName.indexOf('@')==0){
                // @click = 'handleClick'
                const eventName = attrName.substring(1)
                this.eventHandler(node,this.$vm,exp,eventName)
            }
        })
    }
    text(node,vm,exp){
        this.update(node,vm,exp,'text')
    }
    // 双向数据的绑定
    model(node,vm,exp){
        //update数据变了改界面是界面遍历改数据
        this.update(node,vm,exp,'model')
        // 界面遍历改数据
        node.addEventListener('input',e=>{
            vm[exp] = e.target.value
        })
    }
    modelUpdator(node,value){
        node.value = value
    }
    html(node,vm,exp){
        this.update(node,vm,exp,'html')
    }
    htmlUpdator(node,value){
        node.innerHTML = value
    }

    eventHandler(node,vm,exp,eventName){
        // 获取回调函数
        const fn = vm.$options.methods && vm.$options.methods[exp]
        if (eventName && fn) {
            node.addEventListener(eventName,fn.bind(vm))
        }
    }
    // 把插值表达式替换为实际内容
    compileText(node){
        // {{xxx}} RegExp.$1 ===>xxx RegExp.$1是匹配分组部分
        console.log(RegExp.$1);
        // node.textContent = this.$vm[RegExp.$1]
        const exp = RegExp.$1;
        this.update(node ,this.$vm,exp,'text')
    }
    // 编写update函数，它可复用
    // exp ==》表达式 dir ==>具体操作 text html model
    update(node,vm,exp,dir){
      const  fn = this[dir+'Updator']
      fn && fn(node,vm[exp])
    // 创建watcher
      new Watcher(vm,exp,function(){
          fn && fn(node,vm[exp])
      })

    }

    textUpdator(node,value){
        node.textContent = value
    }
}