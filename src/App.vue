<template>
  <div id="app">
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
}

.logo {
  max-height: 200px;
}
</style>
