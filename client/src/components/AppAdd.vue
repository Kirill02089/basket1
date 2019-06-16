<template>
  <div class="AppAdd has-background-white-ter">
    <div>
      Разместить рекламу
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import BroadcastInfo from "./broadcast/BroadcastInfo";

  export default {
    name: "AppAdd",
    components: {BroadcastInfo},
    computed: {
      ...mapGetters([
        'broadcasts'
      ])
    },
    methods: {
      toBroadcast(broadcast) {
        this.$router.replace({name: 'broadcast', params: { id: broadcast.id }});
      }
    }
  }
</script>

<style lang="less" scoped>
  .AppAdd {
    padding: 10px 0;
    height: 100%;

    & > div {
      display: flex;
      justify-content: center;
      text-decoration: underline;
    }

    .BroadcastInfo-container {
      margin: 10px 10px;
    }
  }
</style>
