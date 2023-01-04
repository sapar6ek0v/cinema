import { Paths } from '../../../constants/paths';

export const footerList = [
  {
    id: Date.now() + Math.random() * 1000,
    title: 'Movies',
    links: [
      {
        id: Date.now() + Math.random() * 1000,
        title: 'Now Playing',
        path: `${Paths.MOVIES}?type=now_playing`,
      },
      {
        id: Date.now() + Math.random() * 1000,
        title: 'Popular',
        path: `${Paths.MOVIES}?type=popular`,
      },
      {
        id: Date.now() + Math.random() * 1000,
        title: 'Top Rated',
        path: `${Paths.MOVIES}?type=top_rated`,
      },
      {
        id: Date.now() + Math.random() * 1000,
        title: 'Upcoming',
        path: `${Paths.MOVIES}?type=upcoming`,
      },
    ],
  },
  {
    id: Date.now() + Math.random() * 1000,
    title: 'Tv Shows',
    links: [
      {
        id: Date.now() + Math.random() * 1000,
        title: 'Popular',
        path: `${Paths.TV_SHOWS}?type=popular`,
      },
      {
        id: Date.now() + Math.random() * 1000,
        title: 'On The Air',
        path: `${Paths.TV_SHOWS}?type=on_the_air`,
      },
      {
        id: Date.now() + Math.random() * 1000,
        title: 'Top Rated',
        path: `${Paths.TV_SHOWS}?type=top_rated`,
      },
      {
        id: Date.now() + Math.random() * 1000,
        title: 'Airing Today',
        path: `${Paths.TV_SHOWS}?type=airing_today`,
      },
    ],
  },
];
