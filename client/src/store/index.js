import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex/lib'
import feathersClient from '../api/feathersClient'

const { service, auth, FeathersVuex } = feathersVuex(feathersClient, { idField: '_id' });
Vue.use(Vuex);
Vue.use(FeathersVuex);

import {Broadcasts} from "./data";

export default new Vuex.Store({
  state: {
    broadcasts: [...Broadcasts],
    activeBroadcast: {}
  },
  mutations: {
    activateBroadcast (state, brId) {
      state.activeBroadcast = state.broadcasts.find(br => br.id === brId);
    }
  },
  getters: {
    broadcasts(store) {
      return store.broadcasts;
    },
    activeBroadcast(store) {
      return store.activeBroadcast;
    },
  },
  actions: {
    activateBroadcast({commit}, brId) {
      commit('activateBroadcast', brId);
    }
  },

  plugins: [

  ]
})
