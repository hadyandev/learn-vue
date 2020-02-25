import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// Create global filter
Vue.filter("snippet", val => {
  if (!val || typeof val != "string") return "";

  // take 50 from object
  val = val.slice(0, 50);

  return val;
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
