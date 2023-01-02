import { Paths } from '../../../constants/paths';

export const navbarList = [
  {
    id: Date.now() + Math.random() * 1000,
    title: 'home',
    path: Paths.MAIN,
  },
  {
    id: Date.now() + Math.random() * 1000,
    title: 'movies',
    path: Paths.MOVIES,
    submenu: [
      {
        id: Date.now() + Math.random() * 1000,
        title: 'now playing',
        path: 'now_playing',
      },
      {
        id: Date.now() + Math.random() * 1000,
        title: 'popular',
        path: 'popular',
      },
      {
        id: Date.now() + Math.random() * 1000,
        title: 'top rated',
        path: 'top_rated',
      },
      {
        id: Date.now() + Math.random() * 1000,
        title: 'upcoming',
        path: 'upcoming',
      },
    ],
  },
  {
    id: Date.now() + Math.random() * 1000,
    title: 'tv serials',
    path: Paths.TV_SHOWS,
    submenu: [
      {
        id: Date.now() + Math.random() * 1000,
        title: 'popular',
        path: 'popular',
      },
      {
        id: Date.now() + Math.random() * 1000,
        title: 'on the air',
        path: 'on_the_air',
      },
      {
        id: Date.now() + Math.random() * 1000,
        title: 'top rated',
        path: 'top_rated',
      },
      {
        id: Date.now() + Math.random() * 1000,
        title: 'airing today',
        path: 'airing_today',
      },
    ],
  },
  {
    id: Date.now() + Math.random() * 1000,
    title: 'community',
    path: '/community',
  },
  {
    id: Date.now() + Math.random() * 1000,
    title: 'news',
    path: '/news',
  },
  {
    id: Date.now() + Math.random() * 1000,
    title: 'help',
    path: '/help',
  },
  {
    id: Date.now() + Math.random() * 1000,
    title: 'login',
    path: '/login',
  },
];
