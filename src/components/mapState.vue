<template>
  <div class="hello">
    <button @click='_clcik'>click me</button>
    <h2>{{localComputed}}</h2>
    <h3>{{localComputed1}}</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  // https://vuex.vuejs.org/zh/guide/state.html
  // computed: {
  //   count(){
  //     return this.$store.state.count
  //   }
  // },
  // computed: mapState({
  //   count:state => this.$store.state.count,
  //   countAlias: 'count',
  //   countPlusLocalState (state) {
  //     return `111+${this.$store.state.count}`
  //   }
  // }),
  // computed:mapState(['count']),
  computed: {
    localComputed(){
       return this.$store.state.count + 'yy'
    },
    localComputed1(){
      return 'yuying'
    },
    ...mapState(['count'])
  },
  methods: {
    _clcik(){
      this.$store.commit('increment')
    },

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
