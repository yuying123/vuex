<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<mapState/>-->
    <!--<getter/>-->
    <!--<mutation/>-->
    <!-- <action/> -->

    <!-- <helloWord></helloWord> -->
    <!-- <filterCom></filterCom> -->

    <keepAliveCom></keepAliveCom>
  </div>
</template>

<script>
// import mapState from './components/mapState.vue'
// import getter from './components/getter.vue'
// import mutation from './components/mutation.vue'
// import action from './components/action.vue'

// import helloWord from './slot/HelloWorld.vue'
// import filterCom from './filter/filter.vue'

import keepAliveCom from './keep-alive/keepAlive.vue'
export default {
  name: 'app',
  components: {
    // mapState,
    // getter,
    // mutation,
    // action

    // helloWord,
    // filterCom,
    keepAliveCom
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

