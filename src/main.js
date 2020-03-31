import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/logout",
      component: Logout
    },
    {
      path: "/",
      component: Home
    }
  ],
  mode: "history"
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
