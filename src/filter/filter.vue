
<template>
  <div>
    <input type="text" v-model='msg'>
    {{ msg | capitalize |joinEllipsis }}
    {{ msg | filterArgument(!true,'a',)}}
  </div>
</template>

<script>
// 自定义过滤器
export default {
  name:'myFilter',
  data(){
    return{
      msg : ''
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    joinEllipsis:function(value){
      if(!value) return ""
      value = value.toString()
      return value+'...'
    },
    filterArgument:function(value,arg1,arg2){
      console.log(value,arg1,arg2)
      return value
    }
  }
}
</script>