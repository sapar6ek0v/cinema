import axios from 'axios';
import { URL_BASE, API_KEY } from '../../constants/api';

export const SearchServices = {
  async multiSearch(query, lang = 'en', page = '1') {
    const { data } = await axios.get(
      `${URL_BASE}/search/multi?api_key=${API_KEY}&language=${lang}&query=${query}&page=${page}`
    );
    return data.results;
  },
};
