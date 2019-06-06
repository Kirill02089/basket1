<template>
  <div class="Broadcast">
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading"></b-loading>

    <div class="Broadcast-chat box" v-if="!isLoading" :class="{loaded: !isLoading}">

      <div class="Broadcast-event" v-for="(event, index) in events">
        <div class="Broadcast-event_time">{{index + 1}}. {{event.time | time}}</div>
        <div class="Broadcast-event_info">
          <b-tag type="is-info" size="is-medium">{{event.info}}</b-tag>
        </div>
        <div class="Broadcast-event_player" @click="showPlayer(event.player)">{{event.player.name}}</div>
      </div>


    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import {Players} from '../store/data'
  import moment from 'moment';
  import PlayerForm from "../components/PlayerForm";

  export default {
    name: 'game',
    components: {},
    computed: {
      ...mapGetters([
        'activeBroadcast'
      ]),
    },
    filters: {
      time(date) {
        return moment(date).format('mm:ss')
      }
    },
    methods: {
      ...mapActions([
        'activateBroadcast'
      ]),

      loadBroadcast() {
        this.isLoading = true;

        setTimeout(() => {
          this.isLoading = false
        }, 150);
        const brId = parseInt(this.$route.params.id);
        this.activateBroadcast(brId);
      },
      showPlayer(player) {
        this.$modal.open({
          parent: this,
          component: PlayerForm,
          hasModalCard: true,
          props: {
            player
          }
        })
      }
    },
    data() {
      return {
        isFullPage: false,
        isLoading: true,
        events: [
          {
            time: moment().minute(5),
            info: '1 очко',
            player: Players[0],
          },
          {
            time: moment().minute(10),
            info: 'Мимо 2 очка',
            player: Players[1],
          },
          {
            time: moment().minute(15),
            info: 'Пасс-потеря',
            player: Players[2],
          },
          {
            time: moment().minute(25),
            info: '24 секунды',
            player: Players[3],
          },
        ]
      }
    },
    mounted() {
      this.loadBroadcast();
    },
    watch: {
      '$route'(to, from) {
        this.loadBroadcast();
      }
    }
  }
</script>

<style lang="less" scoped>
  .Broadcast {
    height: 100%;
    position: relative;
    padding: 20px;
    margin-left: -30px;

    &-chat {
      animation: onload 0.5s ease;

      @keyframes onload {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }


    &-event {
      display: flex;
      align-items: center;

      & > div {
        padding: 0 8px;

      }

      & + & {
        margin-top: 10px;
      }

      &_player {
        cursor: pointer;
      }
    }
  }
</style>
