<template>
  <div class="TeamsPage">
    <div class="TeamsPage-controls">
      <router-link to="/teams/addTeam">
        <button class="button is-info">Добавить команду</button>
      </router-link>
      <b-field>
        <b-input placeholder="Поиск команды"
                 type="search"
                 icon-pack="fa"
                 icon="search">
        </b-input>
        <p class="control">
          <button class="button is-link">Найти</button>
        </p>
      </b-field>
    </div>


    <template v-for="team in teams">
      <div class="TeamsPage-team box">
        <div class="TeamsPage-team_title">
          <div>
            <figure class="image is-64x64">
              <img class="is-rounded" :src="'images/' + team.img"/>
            </figure>
            <h1>{{team.title}}</h1>
          </div>
          <router-link to="/" @click="toTeam(team)">К статистике команды</router-link>
        </div>
        <players-table :players="team.players"></players-table>
      </div>
    </template>
    </div>
</template>

<script>

import PlayersTable from "../components/PlayersTable";
import BInput from "buefy/src/components/input/Input";
import BField from "buefy/src/components/field/Field";
import {Teams} from "../store/data";

export default {
  name: 'home',
  components: {
    BField,
    BInput,
    PlayersTable
  },
  data() {
    return {
      teams: Teams
    }
  },
  methods: {
    toTeam(team) {
      const params = {
        name: team.title
      };

      this.$router.push({name: 'teams-name'}, params)
    }
  }
}
</script>

<style lang="less" scoped>
  .TeamsPage {
    margin: 20px 20px 0 0;

    &-controls {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
    }

    &-team {
      &_title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        background: whitesmoke;
        margin: -20px -20px 0 -20px;
        padding: 20px;

        & > div {
          display: flex;
          align-items: center;
        }
      }

      h1 {
        font-size: 15pt;
        margin-left: 15px;
      }

      & + & {
        margin-top: 30px;
      }
    }
  }
</style>
