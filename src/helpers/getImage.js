import { IMAGE_BASE_URL } from '../constants/api';

export const getImage = (path, width = 'w500') => `${IMAGE_BASE_URL}/${width}${path}`;
