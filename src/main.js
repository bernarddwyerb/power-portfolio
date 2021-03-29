import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import EnlargeableImage from '@diracleo/vue-enlargeable-image';

Vue.use(EnlargeableImage)
Vue.config.productionTip = false

import Page1 from "./components/Bonjour.vue";
import Page2 from "./components/GallerieImage.vue";
import Page3 from "./components/GallerieVideo.vue";
import Page4 from "./components/Gallerie3d.vue";
Vue.use(VueRouter);


export const routes = [
  { path: "/", component: Page1, nom: "BONJOUR" },
  { path: "/page2", component: Page2, nom: "IMAGES" },
  { path: "/page3", component: Page3, nom: "VIDÉOS" },
  { path: "/page4", component: Page4, nom: "3D" }
];

// encore de la config a copier coller
const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
