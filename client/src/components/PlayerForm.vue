<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Игрок</p>
      </header>
      <section class="modal-card-body">
        <b-field label="ФИО">
          <b-input
            disabled
            :value="player.fio"
            required>
          </b-input>
        </b-field>

        <b-field label="Команда">
          <b-input
            type="email"
            disabled
            :value="teamss[player.id_team].title"
            required>
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Закрыть</button>
      </footer>
    </div>
  </form>
</template>

<script>
  import {Teams} from "../store/data";

  export default {
    name: "PlayerForm",
    props: {
      player: {
        type: Object
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
