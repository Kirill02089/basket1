<template>
  <div id="app">
    <AppNav/>
    <div class="columns">
      <div class="column is-one-fifth">
        <AppSideBar/>
      </div>
      <div class="column body">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import AppNav from "./components/AppNav";
  import AppSideBar from "./components/AppSideBar";

  export default {
    components: {AppNav,AppSideBar}
  }
</script>

<style lang="less">
  @import (css) url('https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  #app {
    font-family: 'Oswald', sans-serif;
    height: 100%;

    & > .columns {
      height: 100%;
    }

    .body {
      padding: 10px;
    }
  }
</style>

