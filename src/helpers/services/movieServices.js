import axios from 'axios';
import { URL_BASE, API_KEY } from '../../constants/api';

export const MovieServices = {
  async getMoviesByType(type, lang = 'en', page = 1) {
    const { data } = await axios.get(
      `${URL_BASE}/movie/${type}?api_key=${API_KEY}&language=${lang}&page=${page}`
    );
    return data.results;
  },
  async getTvsByType(type, lang = 'en', page = 1) {
    const { data } = await axios.get(
      `${URL_BASE}/tv/${type}?api_key=${API_KEY}&language=${lang}&page=${page}`
    );
    return data.results;
  },
  async getById(type, id, lang = 'en') {
    const { data } = await axios.get(`${URL_BASE}/${type}/${id}?api_key=${API_KEY}&language=${lang}`);
    return data;
  },
};
