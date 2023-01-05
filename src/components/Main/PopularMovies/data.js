import { idGenerator } from '../../../helpers/idGenerator';

export const buttonTypes = [
  {
    id: idGenerator(),
    type: 'popular',
    title: 'Popular',
  },
  {
    id: idGenerator(),
    type: 'upcoming',
    title: 'Coming soon',
  },
  {
    id: idGenerator(),
    type: 'top_rated',
    title: 'Top rated',
  },
];
