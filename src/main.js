import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';
import VJsoneditor from 'v-jsoneditor'

Vue.use(VeeValidate);
Vue.use(VJsoneditor);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
