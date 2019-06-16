<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img class="navbar-brand" src="images/logo.png" width="70" height="28">
      </router-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/teams">КОМАНДЫ</router-link>
        <router-link class="navbar-item" to="/top">ИГРОКИ</router-link>
        <router-link class="navbar-item" to="/top">РЕЙТИНГ</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Регистрация</strong>
            </a>
            <a class="button is-light">
              Вход
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "AppNav"
    }
</script>

<style lang="less" scoped>
  .navbar {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1)

  }
</style>
