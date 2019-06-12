<template>
  <div class="hello">
    <h1>Welcome to Your Seven Intergation Example</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the project README.
    </p>
    <div class="actions">
      <div class="event-emitter-container">
        <form @submit.prevent="sendEvent">
          <div class="form-input-container">
            <form-input :name="'event'"
              :label="'Event'"
              :placeholder="'Event'"
              :autofocus="true"
              :validation="'required'"
              v-model="eventName"
            >
            </form-input>
          </div>
          <div class="form-input-container">
            <v-jsoneditor v-model="eventData"
              :options="jsonEditorOptions">
            </v-jsoneditor>
          </div>
          <form-button :label="'Send'">
          </form-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VJsoneditor from 'vue-jsoneditor';
import FormInput from './FormInput';
import FormButton from './FormButton';

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
  methods: {
    sendEvent() {
      gateway.sendMessage({
        action: this.eventName,
        data: this.eventData,
      });
    },
  },
  components: {
    FormInput,
    FormButton,
    VJsoneditor,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '~jsoneditor/dist/jsoneditor.min.css';

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
