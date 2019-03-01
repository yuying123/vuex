<template>
  <div>
    <button @click='_clcik(10)'>click me</button>
    <h2>{{count}}</h2>
    <h3>{{me}}</h3>
    <ul v-for="(item, index) in doneList" :key="index">{{item.text}}</ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { mapMutations } from 'vuex'

export default {
  computed: {
    doneList(){
      return this.$store.getters.doneTodoList
    },
    ...mapState(['count','me'])
  },
  methods: {
    // _clcik(){
      // this.$store.commit('incrementAdd',10)
      // this.$store.commit('incrementAdd1',{amount:100})
      // this.$store.commit({
      //   type:'incrementAdd1',
      //   amount:100
      // })
      // this.$store.commit('VUE_SET')
    // }
    ...mapMutations({
      '_clcik':'incrementAdd'
    })
  },

}
</script>