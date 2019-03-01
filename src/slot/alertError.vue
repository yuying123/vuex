<template>
  <div class='alert-box'>

    <!--<strong>Error!</strong><span>{{text}}</span>-->

    <!-- <strong>Error!</strong>
    <span><slot></slot></span> -->


    <!-- 后备内容   （提供内容>后备内容） -->
    <!-- <strong>Error!</strong>
    <span><slot>default text</slot></span> -->

    <!-- 具名插槽 -->
    <!-- 
      对于这样的情况，<slot> 元素有一个特殊的特性：name。这个特性可以用来定义额外的插槽：
     -->
    <!-- <div class="container">
      <header><slot name="header"></slot></header>
      <main><slot name="default"></slot></main>
      <footer><slot name="footer"></slot></footer>
    </div> -->
    
    <!-- 作用域插槽 -->
    <!-- 
      作用域插槽的内部工作原理是将你的插槽内容包括在一个传入单个参数的函数里：
     -->
    <!-- <div> -->
      <!-- <slot v-bind:user="user" v-bind:txt="txt">{{user.name}}</slot> -->
      <!-- <slot></slot> -->
    <!-- </div> -->

    <div class="container">
      <header><slot name="header"></slot></header>
      <main><slot name="default"></slot></main>
      <footer><slot name="footer"></slot></footer>
    </div>

  </div>
</template>

<script>
export default {
  name:'alertError',
  props:['text'],
  data() {
    return {
      txt:'Something bad happened....',
      user:{
        name:'yuying',
        _name:'yuyinginginging',
      }
    }
  },
}
</script>

<style lang='less'>
// .alert-box{
//   padding:20px;
//   margin:10px;
//   background-color:#ff7963;
//   strong{
//     margin-right:20px;
//   }
//   span{
//     color:#fff;
//   }
// }
</style>