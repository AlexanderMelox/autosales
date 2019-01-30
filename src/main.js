
import Vue from 'vue'
import App from './App'

import Button from './components/shared/Button.vue';

Vue.config.productionTip = false

// Global components
Vue.component('Button', Button);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
})