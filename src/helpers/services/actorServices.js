import axios from 'axios';
import { URL_BASE, API_KEY } from '../../constants/api';

export const ActorServices = {
  async getPopularActors(lang = 'ru') {
    const { data } = await axios.get(`${URL_BASE}/person/popular?api_key=${API_KEY}&language=${lang}`);
    return data.results;
  },
};
