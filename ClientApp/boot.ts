import "babel-polyfill";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex, { StoreOptions } from "vuex";
import BootstrapVue from "bootstrap-vue";
import App from "./components/App.vue";
import Hello from "./components/Hello/Hello.vue";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.component("hello", Hello);

let app = new Vue({
    el: "#app-root",
    render: h => h(App)
});