import { Paths } from '../../../constants/paths';
import { idGenerator } from '../../../helpers/idGenerator';

export const footerList = [
  {
    id: idGenerator(),
    title: 'Movies',
    links: [
      {
        id: idGenerator(),
        title: 'Now Playing',
        path: `${Paths.MOVIES}?type=now_playing&page=1`,
      },
      {
        id: idGenerator(),
        title: 'Popular',
        path: `${Paths.MOVIES}?type=popular&page=1`,
      },
      {
        id: idGenerator(),
        title: 'Top Rated',
        path: `${Paths.MOVIES}?type=top_rated&page=1`,
      },
      {
        id: idGenerator(),
        title: 'Upcoming',
        path: `${Paths.MOVIES}?type=upcoming&page=1`,
      },
    ],
  },
  {
    id: idGenerator(),
    title: 'Tv Shows',
    links: [
      {
        id: idGenerator(),
        title: 'Popular',
        path: `${Paths.TV_SHOWS}?type=popular`,
      },
      {
        id: idGenerator(),
        title: 'On The Air',
        path: `${Paths.TV_SHOWS}?type=on_the_air`,
      },
      {
        id: idGenerator(),
        title: 'Top Rated',
        path: `${Paths.TV_SHOWS}?type=top_rated`,
      },
      {
        id: idGenerator(),
        title: 'Airing Today',
        path: `${Paths.TV_SHOWS}?type=airing_today`,
      },
    ],
  },
];
