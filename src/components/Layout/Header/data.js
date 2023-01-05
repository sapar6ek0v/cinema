import { Paths } from '../../../constants/paths';
import { idGenerator } from '../../../helpers/idGenerator';

export const navbarList = [
  {
    id: idGenerator(),
    title: 'home',
    path: Paths.MAIN,
  },
  {
    id: idGenerator(),
    title: 'movies',
    path: Paths.MOVIES,
    submenu: [
      {
        id: idGenerator(),
        title: 'now playing',
        path: `${Paths.MOVIES}?type=now_playing`,
      },
      {
        id: idGenerator(),
        title: 'popular',
        path: `${Paths.MOVIES}?type=popular`,
      },
      {
        id: idGenerator(),
        title: 'top rated',
        path: `${Paths.MOVIES}?type=top_rated`,
      },
      {
        id: idGenerator(),
        title: 'upcoming',
        path: `${Paths.MOVIES}?type=upcoming`,
      },
    ],
  },
  {
    id: idGenerator(),
    title: 'tv serials',
    path: Paths.TV_SHOWS,
    submenu: [
      {
        id: idGenerator(),
        title: 'popular',
        path: `${Paths.TV_SHOWS}?type=popular`,
      },
      {
        id: idGenerator(),
        title: 'on the air',
        path: `${Paths.TV_SHOWS}?type=on_the_air`,
      },
      {
        id: idGenerator(),
        title: 'top rated',
        path: `${Paths.TV_SHOWS}?type=top_rated`,
      },
      {
        id: idGenerator(),
        title: 'airing today',
        path: `${Paths.TV_SHOWS}?type=airing_today`,
      },
    ],
  },
  {
    id: idGenerator(),
    title: 'community',
    path: '/community',
  },
  {
    id: idGenerator(),
    title: 'news',
    path: '/news',
  },
  {
    id: idGenerator(),
    title: 'help',
    path: '/help',
  },
  {
    id: idGenerator(),
    title: 'login',
    path: '/login',
  },
];
