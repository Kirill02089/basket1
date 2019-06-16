<template>
  <div class="Broadcast">
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading"></b-loading>

    <template v-if="!isLoading">
      <div class="Broadcast-info">
        <div>
          <div class="Broadcast-score">{{activeBroadcast.game_result.score[0]}} - {{activeBroadcast.teams[0].title}}
          </div>
          <div class="Broadcast-score">{{activeBroadcast.game_result.score[1]}} - {{activeBroadcast.teams[1].title}}
          </div>
        </div>

        <div class="Broadcast-timer"><span class="tag is-info is-large">{{time}}</span></div>
      </div>

      <div class="Broadcast-controls box">
        <div>
          <button class="button"
                  @click="isPause = !isPause"> {{isPause ? 'Продолжить' : 'Пауза'}}</button>
          <b-field label="Событие">
            <b-select>
              <option v-for="gameEvent in gameEventsTypes"
                      :value="gameEvent.value">{{gameEvent.title}}</option>
            </b-select>
          </b-field>
          <b-field label="Игрок">
            <b-select>
              <option v-for="player in players"
                      :value="players.id_player">{{player.number}}) {{player.fio}}</option>
            </b-select>
          </b-field>
        </div>

        <button class="button is-primary">Отправить</button>
      </div>

      <b-tabs v-model="activeTab">
        <b-tab-item label="Инфо">
          <top-table></top-table>
        </b-tab-item>

        <b-tab-item label="Статистика">
          <top-table type="players"></top-table>
        </b-tab-item>

        <b-tab-item label="Ход игры">
          <div class="Broadcast-chat box"
               :class="{loaded: !isLoading}">
            <span class="tag is-medium is-info">1</span>
            <div class="Broadcast-event"
                 :class="{'active' : index === 0}"
                 v-for="(event, index) in currentEvents">
              <div>
                <div class="Broadcast-event_time">{{event.game_time}}. {{event.time | time}} | {{event.score}}</div>
                <div class="Broadcast-event_info">
                  <b-tag :type="getTagType(event.type.id_event)"
                         size="is-medium">{{event.type.title}}</b-tag>
                </div>
              </div>

              <div class="Broadcast-event_players">

                <div v-if="!event.additional_player">
                  <div v-if="event.player.id_team % 2 > 0"
                       class="Broadcast-event_player"
                       @click="showPlayer(event.player)">{{event.player.fio}}
                    ({{event.player.number}})
                  </div>
                  <div class="Broadcast-event_player-additional"
                       v-if="event.additional_player && event.player.id_team % 2 > 10"
                       @click="showPlayer(event.additional_player)">{{event.additional_player.fio}}
                    ({{event.additional_player.number}})
                  </div>
                </div>

                <div class="Broadcast-event_player-additional"
                     :style="event.player.id_team % 2 > 0 ? 'order:2' : 'order: 1'"
                     v-if="event.additional_player"
                     @click="showPlayer(event.additional_player)">{{event.additional_player.fio}}
                  ({{event.additional_player.number}})
                </div>

                <div >
                  <div v-if="event.player.id_team % 2 === 0" class="Broadcast-event_player" @click="showPlayer(event.player)">{{event.player.fio}}
                    ({{event.player.number}})
                  </div>
                </div>

              </div>

            </div>
          </div>
        </b-tab-item>
      </b-tabs>

    </template>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import moment from 'moment';
  import PlayerForm from "../components/PlayerForm";
  import BField from "buefy/src/components/field/Field";
  import BSelect from "buefy/src/components/select/Select";
  import {GameEventTypes, Players} from "../store/data";
  import BTag from "buefy/src/components/tag/Tag";

  export default {
    name: 'game',
    components: {BTag, BSelect, BField},
    computed: {
      ...mapGetters([
        'activeBroadcast'
      ]),
      currentEvents() {
        return this.activeBroadcast.game_events.reverse();
      }
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
      getTagType(type) {
        return this.eventTagTypes.find(e => e.value === type).tag
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
      },
      updateTime() {
        this.time = moment().format('mm:ss')
      }
    },
    data() {
      return {
        isFullPage: false,
        isLoading: true,
        isPause: false,
        time: null,
        timer: null,
        players: [...Players],
        gameEventsTypes: [...GameEventTypes],
        eventTagTypes: [
          {value: 1, tag: 'is-success'},
          {value: 2, tag: 'is-success'},
          {value: 3, tag: 'is-success'},
          {value: 4, tag: 'is-danger'},
          {value: 5, tag: 'is-success'},
          {value: 6, tag: 'is-danger'},
        ]
      }
    },
    mounted() {
      this.loadBroadcast();
      this.timer = setInterval(this.updateTime, 1000);
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

    &-controls {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        margin-bottom: 8px;
      }
    }

    &-info {
      display: flex;
      justify-content: space-between;
    }

    &-score {
      font-size: 15pt;
    }

    &-timer {
      font-size: 30pt;
      margin-bottom: 10px;
    }

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

      &.active {
        padding: 10px 10px 10px 0;
        background: #eff4ff;
      }

      & > div {
        padding: 0 8px;
        &:first-child {
          width: 250px;
          display: flex;
          align-items: center;

          .Broadcast-event_time {
            margin-right: 10px;
          }
        }
      }

      & + & {
        margin-top: 10px;
      }

      &_players {
        width: calc(100% - 250px);
        display: flex;
        justify-content: space-between;
        & > div {
          &:first-child {
            order: 1
          }
          &:last-child {
            order: 1
          }
        }
      }

      &_player {
        cursor: pointer;
        text-decoration: underline;
        display: flex;
        justify-content: center;

        &-additional {
          text-decoration: underline;
          color: red;
        }
      }
    }
  }
</style>
