import Vue from 'vue'
import Router from 'vue-router'
import Broadcast from './views/Broadcast'
import Top from "./views/Top";
import Teams from "./views/Teams";
import AddTeam from "./views/AddTeam";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/broadcast/:id',
      name: 'broadcast',
      component: Broadcast
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    },
    {
      path: '/teams/addTeam',
      name: 'teamsAdd',
      component: AddTeam
    },
    {
      path: '/teams/:name',
      name: 'teams-name',
      component: AddTeam
    },
    {
      path: '/top',
      name: 'top',
      component: Top
    },
  ]
})
