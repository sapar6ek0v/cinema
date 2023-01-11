import React from 'react';
import { useTranslation } from 'react-i18next';

import { Paths } from '../../../../constants/paths';
import { idGenerator } from '../../../../helpers/idGenerator';
import { Stack, Title } from '../styles';
import { List, LinkItem } from './styles';

const ListItem = () => {
  const { t } = useTranslation();

  const footerList = [
    {
      id: idGenerator(),
      title: t('movie.title'),
      links: [
        {
          id: idGenerator(),
          title: t('movie.nowPlaying'),
          path: `${Paths.MOVIES}?type=now_playing&page=1`,
        },
        {
          id: idGenerator(),
          title: t('movie.popular'),
          path: `${Paths.MOVIES}?type=popular&page=1`,
        },
        {
          id: idGenerator(),
          title: t('movie.topRated'),
          path: `${Paths.MOVIES}?type=top_rated&page=1`,
        },
        {
          id: idGenerator(),
          title: t('movie.upcoming'),
          path: `${Paths.MOVIES}?type=upcoming&page=1`,
        },
      ],
    },
    {
      id: idGenerator(),
      title: t('tvShow.title'),
      links: [
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
  ];

  return (
    <>
      {footerList.map((item) => (
        <Stack key={item.id}>
          <Title>{item.title}</Title>
          <List>
            {item.links.map((link) => (
              <LinkItem to={link.path} key={link.id}>
                {link.title}
              </LinkItem>
            ))}
          </List>
        </Stack>
      ))}
    </>
  );
};

export default ListItem;
