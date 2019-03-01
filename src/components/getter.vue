<template>
  <div>
    <ul v-for="(item, index) in doneList" :key="index">{{item.text}}</ul>
    <h1>总数：{{doneListLength}}</h1>
    <h1>总数：{{length}}</h1>
    <h2>查找id=2的text:{{getId(2)}}</h2>
    <h2>查找id=2的text:{{getTodoById(2)}}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'


export default {
  computed: {
    doneList(){
      return this.$store.getters.doneTodoList
    },
    doneListLength(){
      return this.$store.getters.doneTodoListLength
    },
    // ...mapGetters(['doneTodoListLength'])
    ...mapGetters({
      length:'doneTodoListLength',
      getId:'getTodoById'
    })
  },
  methods: {
    getTodoById(id){
      return this.$store.getters.getTodoById(id).text
    }
  },
}
</script>