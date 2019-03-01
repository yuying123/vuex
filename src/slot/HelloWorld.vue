<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!--<alertErrorCom :text="errorText"></alertErrorCom>-->
    <!-- <alertErrorCom><h1>大错特错</h1>{{errorText}}</alertErrorCom> -->
    <!-- <alertErrorCom></alertErrorCom> -->

    <!-- <alertErrorCom>
      <template v-slot:header>
        <h1>header text</h1>
      </template>
      <p>pppppppppppp</p>
      <p>pppppppppppp</p>
      <template v-slot:footer>
        <h1>footer text</h1>
      </template>
    </alertErrorCom> -->


    <!-- 具名插槽的缩写 (v-slot:=>#)-->
    <alertErrorCom>
      <template #header>
        <h1>header text</h1>
      </template>
      <p>pppppppppppp</p>
      <p>pppppppppppp</p>
      <template #footer>
        <h1>footer text</h1>
      </template>
    </alertErrorCom>

    <!-- <alertErrorCom>
      <template v-slot:default="slotProps">
        {{slotProps.user._name}}
        {{slotProps.txt}}
      </template>
    </alertErrorCom> -->

    <!-- 只有默认插槽时 -->
     <!-- <alertErrorCom v-slot:default="slotProps"> -->
       <!--  v-slot="slotProps" -->
        <!-- {{slotProps.user._name}} -->
        <!-- {{slotProps.txt}} -->
    <!-- </alertErrorCom> -->

    <!-- 解构插槽 Prop -->
    <!-- <alertErrorCom v-slot="{user:person}">
        {{person._name}}
    </alertErrorCom> -->
    

    <!-- 定义后备内容 ????????????-->
    <!-- <alertErrorCom v-slot="{ user = { firstName: 'Guest' } }">
        {{person.name}}
    </alertErrorCom> -->


    <!-- 动态插槽名 -->
          <!-- 动态参数 -->
          <!-- <a v-bind:[attributeName]="url">一个链接</a> -->
    <!-- <alertErrorCom v-slot:[slotName]>
        {{slotName.name}}
    </alertErrorCom> -->





  </div>
</template>

<script>
import alertErrorCom from './alertError.vue'
export default {
  name: 'HelloWorld',
  components:{
    alertErrorCom
  },
  data () {
    return {
      slotName:'person',
      attributeName:'href',
      url:"//www.baidu.com",
      msg: 'Welcome to Your Vue.js App',
      errorText:'you are wrong',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
