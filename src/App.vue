<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <GatewayExample />
  </div>
</template>

<script>
import GatewayExample from './components/GatewayExample.vue'

export default {
  name: 'app',
  components: {
    GatewayExample
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

.logo {
  max-height: 200px;
}
</style>
