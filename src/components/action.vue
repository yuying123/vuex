<template>
  <div>
     <button @click='_clcik(10)'>click me</button>
     <h2>{{count}}</h2>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['count','me'])
  },
  methods:{
    _clcik (n){
      this.$store.dispatch('increment')
      this.$store.dispatch('incrementAdd',10)
      this.$store.dispatch('increment').then(()=>{
        alert('success')
      })
    },
    // ...mapActions({
    //   '_clcik':'increment_1'
    // })
  }
}
</script>

