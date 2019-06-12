<template>
  <div class="hello">
    <h1>Welcome to Your Seven Intergation Example</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the project README.
    </p>
  </div>
</template>

<script>
const SlaveGateway = window.gravity.gateway.slave;
const gateway = new SlaveGateway({
  slaveId : 'GatewayPlayground',
  data: {
    foo: 'bar',
  },
  debug: true,
});
gateway.subscribe('*', (message) => { // eslint-disable-line
  // Gateway message received.
  // TODO: Define method
});
export default {
  name: 'GatewayExample',
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
