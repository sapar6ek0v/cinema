import { idGenerator } from '../../../helpers/idGenerator';

export const mediaTypes = [
  {
    id: idGenerator(),
    title: 'Movies',
    type: 'movie',
  },
  {
    id: idGenerator(),
    title: 'Tv Shows',
    type: 'tv',
  },
  {
    id: idGenerator(),
    title: 'People',
    type: 'person',
  },
];
