import moment from 'moment'

const Players = [
  {
    id: 0,
    team_id: 1,
    name: 'Волкова Ангелина',
  },
  {
    id: 1,
    team_id: 1,
    name: 'Касимова Альбина'
  },
  {
    id: 2,
    team_id: 2,
    name: 'Козырёва Анаа'
  },
  {
    id: 3,
    team_id: 2,
    name: 'Дзюина Елизавета'
  },
];

const Teams = [
  {
    title: 'УНИКС',
    img: 'УНИКС.jpg',
    players: [...Players]
  },
  {
    title: 'Университет-Югра',
    img: 'ugra.png',
    players: [...Players]
  },
  {
    title: 'ИжГТУ3',
    players: [...Players]
  },
];


const Broadcasts = [
  {
    id: 1,
    game: {
      start_date: moment().add({minutes: -30}),
      end_date: null
    },
    game_events: [],
    game_result: {
      score: [33, 52],
      game_time: null
    },
    teams: [Teams[0], Teams[1]]
  },
  {
    id: 2,
    game: {
      start_date: moment().add({minutes: -10}),
      end_date: null
    },
    game_events: [],
    game_result: {
      score: [0, 6],
      game_time: null
    },
    teams: [Teams[0], Teams[1]]
  },
];

export {
  Broadcasts,
  Teams,
  Players
}
