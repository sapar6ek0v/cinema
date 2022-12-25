import axios from 'axios';
import { URL_BASE, API_KEY } from '../../constants/api';

export const MovieTrendServices = {
  async getDailyMovieTrends(lang = 'ru') {
    const { data } = await axios.get(`${URL_BASE}/trending/movie/day?api_key=${API_KEY}&language=${lang}`);
    return data.results;
  },
};
