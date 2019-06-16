<template>
  <div class="TopPage">
    <b-tabs v-model="activeTab">
      <b-tab-item label="По командам">
        <top-table></top-table>
      </b-tab-item>

      <b-tab-item label="По игрокам">
        <top-table type="players"></top-table>
      </b-tab-item>

      <b-tab-item label="По играм">
        <top-table type="games"></top-table>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>

import TopTable from "../components/TopTable";
import BTabs from "buefy/src/components/tabs/Tabs";
import BTabItem from "buefy/src/components/tabs/TabItem";
export default {
  name: 'top',
  components: {
    BTabItem,
    BTabs,
    TopTable
  },
  data() {
    return {
      activeTab: 0
    }
  }
}
</script>

<style lang="less" scoped>
  .TopPage {
    margin: 20px 20px 0 0;

  }
</style>
