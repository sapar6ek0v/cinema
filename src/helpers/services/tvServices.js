import axios from 'axios';
import { URL_BASE, API_KEY } from '../../constants/api';

export const TvServices = {
  async getTvsByType(type, lang = 'ru', page = 1) {
    const { data } = await axios.get(
      `${URL_BASE}/tv/${type}?api_key=${API_KEY}&language=${lang}&page=${page}`
    );
    return data.results;
  },
};
