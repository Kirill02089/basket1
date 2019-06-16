<template>
  <div class="BroadcastInfo box">
    <div class="BroadcastInfo-images">
      <figure class="image is-64x64">
        <img class="is-rounded" :src="'images/' + broadcast.teams[0].img"/>
      </figure>
      <figure class="image is-64x64">
        <img class="is-rounded" :src="'images/' + broadcast.teams[1].img"/>
      </figure>

    </div>
    <div class="BroadcastInfo-title">
      <span>{{this.broadcast.teams[0].title}}</span>
      <span>{{this.broadcast.teams[1].title}}</span>
    </div>
    <div class="BroadcastInfo-info">
      <div class="BroadcastInfo-info_score">{{broadcastScore}}</div>
      <div class="BroadcastInfo-info_start-date">{{start_date}}</div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: "BroadcastInfo",
    props: {
      broadcast: {
        type: Object
      }
    },
    computed: {
      broadcastTitle() {
        return this.broadcast.teams.reduce((prev, team) => prev ? `${prev} vs ${team.title}` : team.title, '')
      },
      broadcastScore() {
        const score = this.broadcast.game_result.score;
        return `${score[0]} : ${score[1]}`;
      },
      start_date() {
        return moment(this.broadcast.game.start_date).format('HH:mm:ss');
      }
    }
  }
</script>

<style lang="less" scoped>
  .BroadcastInfo {
    color: white;
    cursor: pointer;
    background: #7957d5;
    transition: all 0.2s ease;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      background: darken(#7957d5, 7%);
    }

    &-title {
      width: 100%;
      margin-top: 15px;
      display: flex;
      justify-content: space-evenly;
      span {
        width: 40px;
      }
    }

    &-images {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
    }

    &-info {
      &_score {
        margin-top: 10px;
        font-weight: bold;
        font-size: 20pt;
      }

      &_start-date {
        color: hsl(0, 0%, 86%);
        position: absolute;
        top: 0;
        left: 0;
        margin: 10px;
        font-size: 10pt;
      }
    }
  }
</style>
