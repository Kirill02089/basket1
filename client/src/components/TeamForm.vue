<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Команда</p>
        <figure class="image is-64x64">
          <img :src="'images/' + currentTeam.img"/>
        </figure>
      </header>
      <section class="modal-card-body">
        <players-list :players="currentTeam.players"></players-list>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Закрыть</button>
      </footer>
    </div>
  </form>
</template>

<script>
  import {Teams} from "../store/data";
  import PlayersList from "./PlayersList";

  export default {
    name: "TeamForm",
    components: {PlayersList},
    props: ['id_team'],
    computed: {
      currentTeam() {
        return this.teamss.find(t => t.id_team === this.id_team)
      }
    },
    data() {
      return {
        teamss: [...Teams]
      }
    }
  }
</script>

<style lang="less" scoped>
  .modal-card-foot {
    display: flex;
    justify-items: flex-end;
  }
</style>
