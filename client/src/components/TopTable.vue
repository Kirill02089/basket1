<template>
  <div class="TopTable">
    <template v-if="!type">
      <b-table hoverable
               :paginated="isPaginated"
               :per-page="perPage"
               :current-page.sync="currentPage"
               :pagination-simple="isPaginationSimple"
               :default-sort-direction="defaultSortDirection"
               :data="teams"
               :columns="columns">
        <template slot-scope="{row}">
          <b-table-column>
            {{row.id_team}}
          </b-table-column>
          <b-table-column field="title">
            <span class="TopTable-team" @click="showTeam(row.id_team)">{{row.title}}</span>
          </b-table-column>
          <b-table-column>
            {{row.points}}
          </b-table-column>

        </template>
      </b-table>
    </template>

    <template v-if="type === 'players'">
      <b-table hoverable
               :paginated="isPaginated"
               :per-page="perPage"
               :current-page.sync="currentPage"
               :pagination-simple="isPaginationSimple"
               :default-sort-direction="defaultSortDirection"
               :data="players"
               :columns="players_columns">
        <template slot-scope="{row}">
          <b-table-column>
            {{row.id_player}}
          </b-table-column>
          <b-table-column>
            <span class="TopTable-team" @click="showTeam(row.id_team)">{{teams.find(t => t.id_team === row.id_team).title}}</span>
          </b-table-column>
          <b-table-column>
            {{row.fio}}
          </b-table-column>
          <b-table-column>
            <span class="tag is-primary">{{row.kpd}}</span>
          </b-table-column>
        </template>
      </b-table>
    </template>

    <template v-if="type === 'games'">
      <b-table hoverable
               :paginated="isPaginated"
               :per-page="perPage"
               :current-page.sync="currentPage"
               :pagination-simple="isPaginationSimple"
               :default-sort-direction="'kpd'"
               :data="items"
               :columns="columns">
        <template slot-scope="{row}">
          <b-table-column>
            {{row.id_player}}
          </b-table-column>
          <b-table-column>
            <span class="TopTable-team" @click="showTeam(row.id_team)">{{teams.find(t => t.id_team === row.id_team).title}}</span>
          </b-table-column>
          <b-table-column>
            {{row.fio}}
          </b-table-column>
          <b-table-column field="kpd">

            <span class="tag is-primary">{{row.kpd}}</span>
          </b-table-column>
        </template>
      </b-table>
    </template>
  </div>
</template>

<script>
  import BTable from "buefy/src/components/table/Table";
  import BTableColumn from "buefy/src/components/table/TableColumn";
  import TeamForm from "./TeamForm";
  import {Players, Teams} from "../store/data";

  export default {
    name: "TopTable",
    props: ['type'],
    components: {BTableColumn, BTable},
    data() {
      return {
        isPaginated: true,
        isPaginationSimple: false,
        defaultSortDirection: 'asc',
        currentPage: 1,
        perPage: 5,
        teams: [...Teams],
        players: [...Players],
        games: [],
        columns: [
          {
            field: 'id',
            label: 'Позиция',
            width: '50',
            numeric: true
          },
          {
            field: 'title',
            label: 'Команда',
          },
          {
            field: 'fields',
            label: 'Очки',
          },
        ],
        players_columns: [
          {
            field: 'id_player',
            label: 'Позиция',
            width: '50',
            numeric: true
          },
          {
            field: 'id_team',
            label: 'Команда',
          },
          {
            field: 'fio',
            label: 'ФИО',
          },
          {
            field: 'kpd',
            label: 'КПД игрока',
          },
        ]
      }
    },
    methods: {
      showTeam(id_team) {
        this.$modal.open({
          parent: this,
          component: TeamForm,
          hasModalCard: true,
          props: {
            id_team
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .TopTable {
    &-team {
      cursor: pointer;
      text-decoration: underline;
    }
  }
</style>
