import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Messenger from "./views/Messenger.vue";
import Notes from "./views/Notes.vue";
import Schedule from "./views/Schedule.vue";
import Login from "./views/Login.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Home
    },
    {
      path: "/messenger/:id?",
      name: "messenger",
      component: Messenger
    },
    {
      path: "/notes",
      name: "notes",
      component: Notes
    },
    {
      path: "/schedule",
      name: "schedule",
      component: Schedule
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
