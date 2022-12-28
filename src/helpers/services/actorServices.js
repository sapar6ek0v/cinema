import axios from 'axios';
import { URL_BASE, API_KEY } from '../../constants/api';

export const ActorServices = {
  async getPopularActors(lang = 'en') {
    const { data } = await axios.get(`${URL_BASE}/person/popular?api_key=${API_KEY}&language=${lang}`);
    return data.results;
  },
  async getActorsById(type, id, lang = 'en') {
    const { data } = await axios.get(`${URL_BASE}/${type}/${id}/credits?api_key=${API_KEY}&language=${lang}`);
    return data.cast;
  },
  async getFilmCrewById(type, id, lang = 'en') {
    const { data } = await axios.get(`${URL_BASE}/${type}/${id}/credits?api_key=${API_KEY}&language=${lang}`);
    return data.crew;
  },
  async getActorsAndFilmCrewById(type, id, lang = 'en') {
    const { data } = await axios.get(
      `${URL_BASE}/${type}/${id}/aggregate_credits?api_key=${API_KEY}&language=${lang}`
    );
    return [...data.cast, ...data.crew];
  },
};
