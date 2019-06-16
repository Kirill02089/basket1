<template>
  <div class="AppSideBar has-background-white-ter">
    <div class="BroadcastInfo-container"
         v-for="(br, index) in broadcasts"
         @click="toBroadcast(br)">
      <broadcast-info :broadcast="br" :class="{'next': index > 0}"/>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import BroadcastInfo from "./broadcast/BroadcastInfo";

  export default {
    name: "AppNav",
    components: {BroadcastInfo},
    computed: {
      ...mapGetters([
        'broadcasts'
      ])
    },
    methods: {
      toBroadcast(broadcast) {
        this.$router.replace({name: 'broadcast', params: {id: broadcast.id}});
      }
    }
  }
</script>

<style lang="less" scoped>
  .AppSideBar {
    padding: 10px 0;
    height: 100%;

    .BroadcastInfo-container {
      margin: 10px 10px;

      .BroadcastInfo.next {
        background: hsl(171, 100%, 41%);
      }
    }
  }
</style>
