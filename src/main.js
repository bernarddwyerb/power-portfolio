import Vue from 'vue'
import App from './App.vue'
import EnlargeableImage from '@diracleo/vue-enlargeable-image';

Vue.use(EnlargeableImage)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
