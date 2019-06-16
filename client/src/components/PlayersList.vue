<template>
  <div class="PlayersList">
    <template v-for="(player, index) in players">
      <div class="PlayersList-item">
        <div>
          <span>{{index + 1}}.</span>
          <b-tag rounded :type="getTagType(player.role)">{{roles.find(r => r.value === player.role).title.toUpperCase()}}
          </b-tag>
          <span>№ {{player.number}} {{player.fio}}</span>
        </div>
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
  import BIcon from "buefy/src/components/icon/Icon";
  import BTag from "buefy/src/components/tag/Tag";

  export default {
    name: "PlayersList",
    components: {BTag, BIcon},
    props: ['players'],
    data() {
      return {
        roles: [
          {value: 1, title: 'разыгрывающий защитник'},
          {value: 2, title: 'атакующий защитник'},
          {value: 3, title: 'лёгкий форвард'},
          {value: 4, title: 'тяжёлый (или мощный) форвард '},
          {value: 5, title: 'центровой'},
        ],
        tagTypes: [
          {value: 1, tag: 'is-dark'},
          {value: 2, tag: 'is-primary'},
          {value: 3, tag: 'is-danger'},
          {value: 4, tag: 'is-info'},
          {value: 5, tag: 'is-success'},
        ]
      }
    },
    methods: {
      getTagType(val) {
        if (!val) return ;
        return this.tagTypes.find(t => t.value === val).tag
      },
    }
  }
</script>

<style lang="less" scoped>
  .PlayersList {
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .tag {
        margin: 0 10px;
      }

      & + & {
        margin-top: 8px;
      }
    }
  }
</style>
