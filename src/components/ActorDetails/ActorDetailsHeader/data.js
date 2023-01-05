import { idGenerator } from '../../../helpers/idGenerator';

export const buttonTypes = [
  {
    id: idGenerator(),
    title: 'Overview',
    type: 'overview',
  },
  {
    id: idGenerator(),
    title: 'Personal - Information',
    type: 'personal_information',
  },
  {
    id: idGenerator(),
    title: 'Media',
    type: 'media',
  },
];
