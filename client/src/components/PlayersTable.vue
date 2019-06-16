<template>
  <div class="PlayersTable">
    <b-table hoverable
             :data="players"
             :columns="columns">
      <template slot-scope="{row}">
        <b-table-column>
          {{row.id_player}}
        </b-table-column>
        <b-table-column>
          {{row.fio}}
        </b-table-column>
        <b-table-column>
          <b-tag rounded :type="getTagType(row.role)">{{Roles.find(r => r.value === row.role).title.toUpperCase()}}
          </b-tag>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
  import BTable from "buefy/src/components/table/Table";
  import BTableColumn from "buefy/src/components/table/TableColumn";
  import {Roles, Teams} from "../store/data";
  import BTag from "buefy/src/components/tag/Tag";

  export default {
    name: "PlayersTable",
    components: {BTag, BTableColumn, BTable},
    props: ['players'],
    data() {
      return {
        Roles,
        Teams,
        tagTypes: [
          {value: 1, tag: 'is-dark'},
          {value: 2, tag: 'is-primary'},
          {value: 3, tag: 'is-danger'},
          {value: 4, tag: 'is-info'},
          {value: 5, tag: 'is-success'},
        ],
        columns: [
          {
            field: 'id_player',
            label: 'ID',
            width: '40',
            numeric: true
          },
          {
            field: 'fio',
            label: 'ФИО',
          },
          {
            field: 'role',
            label: 'Роль',
          },
        ]
      }
    },
    methods: {
      getTagType(val) {
        if (!val) return;
        return this.tagTypes.find(t => t.value === val).tag
      },

    }
  }
</script>

<style lang="less" scoped>
</style>
