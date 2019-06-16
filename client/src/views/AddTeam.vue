<template>
  <div class="AddTeamsPage">
    <div class="container">

      <div class="AddTeamsPage-controls">
        <b-field label="Название команды">
          <input class="input is-rounded" v-model="team.title" type="text" placeholder="Введите название команды">
        </b-field>
        <b-field label="Логотип команды">
          <input class="input is-rounded" type="file" placeholder="Введите название команды">
        </b-field>
      </div>
      <div class="AddTeamsPage-controls">
        <h1>Состав команды</h1>

        <b-field label="ФИО">
          <input class="input is-rounded" type="text" v-model="employer.fio" placeholder="Введите ФИО игрока">
        </b-field>
        <b-field label="Номер игрока">
          <input class="input is-rounded" type="number" v-model="employer.number" placeholder="Введите номер игрока">
        </b-field>
        <b-field label="Роль">
          <b-select v-model="employer.role"
                    placeholder="Выберите роль"
                    rounded>
            <option v-for="role in roles" :value="role.value">{{role.title}}</option>
          </b-select>
        </b-field>
        <button class="button" @click="addEmployer">Добавить</button>

        <div class="box AddTeamsPage-employers">
          <players-list :players="employers">
            <button class="button is-danger" @click="remove(index)">
              <b-icon
                pack="fa"
                icon="trash-o"
                size="is-small">
              </b-icon>
            </button>
          </players-list>
        </div>
      </div>
    </div>
    <button class="button is-info AddTeamsPage-add" @click="saveTeam" :disabled="isDisabled">Сохранить</button>
  </div>
</template>

<script>
  import BInput from "buefy/src/components/input/Input";
  import BField from "buefy/src/components/field/Field";
  import BIcon from "buefy/src/components/icon/Icon";
  import BSelect from "buefy/src/components/select/Select";
  import BTag from "buefy/src/components/tag/Tag";
  import PlayersList from "../components/PlayersList";
  import {Roles} from "../store/data";

  export default {
    name: 'home',
    components: {
      PlayersList,
      BTag,
      BSelect,
      BIcon,
      BField,
      BInput,
    },
    computed: {
      isDisabled() {
        return this.employers.length === 0 || this.team.title === null
      }
    },
    data() {
      return {
        team: {
          title: null,
          logo: null
        },
        employer: {
          fio: null,
          number: null,
          role: null
        },
        employers: [],
        roles: Roles,
      }
    },
    methods: {
      addEmployer() {
        this.employers.push({...this.employer});
      },
      remove(emp) {
        this.employers.splice(emp, 1)
      },
      saveTeam() {
        this.$router.push({name: 'teams'})
      }
    }
  }
</script>

<style lang="less" scoped>
  .AddTeamsPage {
    margin: 20px 20px 0 0;

    .container {
      display: flex;

      .AddTeamsPage-controls {
        width: 70%;

        &:first-child {
          width: 30%;
        }

        h1 {
          font-size: 15pt;
          margin-bottom: 8px;
          font-weight: bold;
        }

        & > button {
          margin-bottom: 8px;
        }
      }

      .AddTeamsPage-controls + .AddTeamsPage-controls {
        margin-left: 30px;
      }
    }

    &-employers {
      margin-top: 10px;
    }


    &-add {
      width: 100%;
      font-size: 15pt;
      margin-top: 30px;
    }
  }
</style>
