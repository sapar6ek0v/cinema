import axios from 'axios';
import { URL_BASE, API_KEY } from '../../constants/api';

export const MovieServices = {
  async getMoviesByType(type, lang = 'ru', page = 1) {
    const { data } = await axios.get(
      `${URL_BASE}/movie/${type}?api_key=${API_KEY}&language=${lang}&page=${page}`
    );
    return data.results;
  },
};
