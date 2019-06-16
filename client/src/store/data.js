import moment from 'moment'

const Players = [
  {
    number: 23,
    id_player: 1,
    id_team: 2,
    fio: 'Дзюина Елизавета',
    role: 3,
    kpd: 3.5
  },
  {
    number: 54,
    id_player: 2,
    id_team: 2,
    fio: 'Козырёва Анаа',
    role: 3,
    kpd: 2.2
  },
  {
    number: 12,
    id_player: 3,
    id_team: 1,
    fio: 'Касимова Альбина',
    role: 2,
    kpd: 1.5
  },
  {
    number: 5,
    id_player: 4,
    id_team: 1,
    fio: 'Волкова Ангелина',
    role: 1,
    kpd: 1.2
  },
];

const Roles = [
  {value: 1, title: 'разыгрывающий защитник'},
  {value: 2, title: 'атакующий защитник'},
  {value: 3, title: 'лёгкий форвард'},
  {value: 4, title: 'тяжёлый (или мощный) форвард '},
  {value: 5, title: 'центровой'},
];

const Teams = [
  {
    points: 10,
    id_team: 1,
    title: 'УНИКС',
    img: 'УНИКС.jpg',
    players: [...Players]
  },
  {
    points: 5,
    id_team: 2,
    title: 'Университет-Югра',
    img: 'ugra.png',
    players: [...Players]
  },
  {
    points: 1,
    id_team: 3,
    title: 'ИжГТУ3',
    players: [...Players]
  },
];

const GameEventTypes = [
  {id_event: 1, title: '1 очко'},
  {id_event: 2, title: '2 очко'},
  {id_event: 3, title: '3 очко'},
  {id_event: 4, title: 'Мимо 2 очка'},
  {id_event: 5, title: 'Мимо 3 очка'},
  {id_event: 6, title: 'Фол'},
];

const Broadcasts = [
  {
    id: 1,
    game: {
      start_date: moment().add({minutes: -30}),
      end_date: null
    },
    game_events: [
      {
        time: moment().minute(2).add(30, 's'),
        type: GameEventTypes[5],
        additional_player: Players[2],
        player: Players[0],
        game_time: 1,
        score: '10:12'
      },
      {
        time: moment().minute(3).add(10, 's'),
        type: GameEventTypes[0],
        player: Players[0],
        game_time: 1,
        score: '12:14'
      },
      {
        time: moment().minute(5).add(2, 's'),
        type: GameEventTypes[3],
        player: Players[1],
        game_time: 1,
        score: '12:14'
      },
      {
        time: moment().minute(6).add(60, 's'),
        type: GameEventTypes[1],
        player: Players[2],
        game_time: 1,
        score: '12:16'
      },
      {
        time: moment().minute(8).add(46, 's'),
        type: GameEventTypes[2],
        player: Players[1],
        game_time: 1,
        score: '15:16'
      },
      {
        time: moment().minute(9),
        type: GameEventTypes[3],
        player: Players[3],
        game_time: 1,
        score: '15:16'
      }
    ],
    game_result: {
      score: [15, 16],
      game_time: null
    },
    teams: [Teams[0], Teams[1]]
  },
  {
    id: 1,
    game: {
      start_date: moment().add({minutes: -80}),
      end_date: null
    },
    game_events: [
      {
        time: moment().minute(2).add(30, 's'),
        type: GameEventTypes[5],
        additional_player: Players[2],
        player: Players[0],
        game_time: 1,
        score: '10:12'
      },
      {
        time: moment().minute(3).add(10, 's'),
        type: GameEventTypes[0],
        player: Players[0],
        game_time: 1,
        score: '12:14'
      },
      {
        time: moment().minute(5).add(2, 's'),
        type: GameEventTypes[3],
        player: Players[1],
        game_time: 1,
        score: '12:14'
      },
      {
        time: moment().minute(6).add(60, 's'),
        type: GameEventTypes[1],
        player: Players[2],
        game_time: 1,
        score: '12:16'
      },
      {
        time: moment().minute(8).add(46, 's'),
        type: GameEventTypes[2],
        player: Players[1],
        game_time: 1,
        score: '15:16'
      },
      {
        time: moment().minute(9),
        type: GameEventTypes[3],
        player: Players[3],
        game_time: 1,
        score: '15:16'
      }
    ],
    game_result: {
      score: [15, 16],
      game_time: null
    },
    teams: [Teams[2], Teams[1]]
  },

];

export {
  Broadcasts,
  Teams,
  Players,
  Roles,
  GameEventTypes
}
