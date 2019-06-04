<template>
  <div id="app">
    <AppNav></AppNav>
    <router-view/>
  </div>
</template>

<style lang="less">

</style>
<script>
  import AppNav from "./components/AppNav";
  export default {
    components: {AppNav}
  }
</script>
