import { useTranslation } from 'react-i18next';

import { Paths } from '../../../../constants/paths';
import { idGenerator } from '../../../../helpers/idGenerator';

export const useListItem = () => {
  const { t } = useTranslation();

  const listItem = [
    {
      id: idGenerator(),
      title: t('layout.header.home'),
      path: Paths.MAIN,
    },
    {
      id: idGenerator(),
      title: t('movie.title'),
      path: Paths.MOVIES,
      submenu: [
        {
          id: idGenerator(),
          title: t('movie.nowPlaying'),
          path: `${Paths.MOVIES}?type=now_playing`,
        },
        {
          id: idGenerator(),
          title: t('movie.popular'),
          path: `${Paths.MOVIES}?type=popular`,
        },
        {
          id: idGenerator(),
          title: t('movie.topRated'),
          path: `${Paths.MOVIES}?type=top_rated`,
        },
        {
          id: idGenerator(),
          title: t('movie.upcoming'),
          path: `${Paths.MOVIES}?type=upcoming`,
        },
      ],
    },
    {
      id: idGenerator(),
      title: t('tvShow.title'),
      path: Paths.TV_SHOWS,
      submenu: [
        {
          id: idGenerator(),
          title: t('tvShow.popular'),
          path: `${Paths.TV_SHOWS}?type=popular`,
        },
        {
          id: idGenerator(),
          title: t('tvShow.onTheAir'),
          path: `${Paths.TV_SHOWS}?type=on_the_air`,
        },
        {
          id: idGenerator(),
          title: t('tvShow.topRated'),
          path: `${Paths.TV_SHOWS}?type=top_rated`,
        },
        {
          id: idGenerator(),
          title: t('tvShow.airingToday'),
          path: `${Paths.TV_SHOWS}?type=airing_today`,
        },
      ],
    },
    {
      id: idGenerator(),
      title: t('layout.header.community'),
      path: '/community',
    },
    {
      id: idGenerator(),
      title: t('layout.header.news'),
      path: '/news',
    },
    {
      id: idGenerator(),
      title: t('layout.header.help'),
      path: '/help',
    },
    {
      id: idGenerator(),
      title: t('layout.header.login'),
      path: '/login',
    },
  ];

  return listItem;
};
