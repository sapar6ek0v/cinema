import { idGenerator } from '../../../helpers/idGenerator';

export const buttonTypes = [
  {
    id: idGenerator(),
    type: 'popular',
    title: 'Popular',
  },
  {
    id: idGenerator(),
    type: 'on_the_air',
    title: 'On The Air',
  },
  {
    id: idGenerator(),
    type: 'top_rated',
    title: 'Top rated',
  },
];
