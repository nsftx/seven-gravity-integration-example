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
            <v-jsoneditor
            v-model="eventData"
            :options="jsonEditorOptions"
            :plus="false"
            height="400px"
            />
          </div>
          <form-button :label="'Send'">
          </form-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import slave_gateway from '@nsftx/seven-gravity-gateway/src/slave_gateway';
import VJsoneditor from 'v-jsoneditor'
import FormInput from './FormInput';
import FormButton from './FormButton';

const url = new URL(window.location.href);
const params = url.searchParams;
// get target key/value from URLSearchParams object
const slaveId = params.get('slaveId');
const SlaveGateway = slave_gateway;
const gateway = new SlaveGateway({
  slaveId : slaveId || 'GatewayPlayground',
  data: {
    foo: 'bar',
  },
  load: function (loadData) {
    // eslint-disable-next-line no-console
    console.info('[SGIE] Received load data', loadData);
  },
  debug: true,
});
gateway.subscribe('*', (message) => { // eslint-disable-line
  // Gateway message received.
  // eslint-disable-next-line no-console
  console.info('[SGIE] Message received', message);
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
  mounted() {
    gateway.sendMessage({
      action: 'Slave.Loaded',
      data: {},
    });
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
    VJsoneditor,
    FormInput,
    FormButton
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
