<template>
  <div class="hello">
    <div class="actions">
      <button @click="removeIframe">Remove iframe</button>
      <h4>Iframe:</h4>
      <iframe id="iframee" src="https://memory-leak.surge.sh" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GatewayExample',
  data() {
    return {
      eventName: '',
      eventData: '',
      jsonEditorOptions: {
        mode: 'text',
        modes: ['text', 'code'],
      },
    }
  },
  mounted() {

  },
  methods: {
    removeIframe() {
      let i = document.querySelector('iframe');
      i.parentNode.removeChild(i);
      i = null;
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

.form-input-container {
  margin-bottom: 20px;
}

.event-emitter-container {
  max-width: 480px;
  margin: 0 auto;
}
</style>
