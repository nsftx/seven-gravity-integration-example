<!-- eslint-disable no-console -->
<template>
  <div class="hello">
    <div class="actions">
      <button @click="removeIframe">Remove iframe</button>
      <button @click="addIframe">Add iframe</button>
      <h4>Iframe url</h4>
      <input v-model="url" type="text">
      <h4>Iframe:</h4>
      <div id="append">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GatewayExample',
  data() {
    return {
      elementToCreate: 'iframe',
      url: 'http://localhost:8080',
    }
  },
  mounted() {
    window.addEventListener('message', (e, data) => {
      // eslint-disable-next-line no-console
      console.log('messae recievied', data);
    });
     // eslint-disable-next-line no-console
    console.log('window parent exist', window.parent);
  },
  methods: {
    addIframe() {
      let iframe = window.document.createElement(this.elementToCreate);
      iframe.setAttribute('src', this.url);
      iframe.setAttribute('style', 'width:640px; height:480px');
      iframe.setAttribute('nwdisable', '');
      let append = document.querySelector('#append');
      append.append(iframe);
    },
    removeIframe() {
      let i = document.querySelector(this.elementToCreate);
      i.parentNode.removeChild(i);
      i = null;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

iframe, webview {
  border: 2px solid red;
}

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
