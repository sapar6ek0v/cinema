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
  async getActorImages(id, lang = 'en') {
    const { data } = await axios.get(`${URL_BASE}/person/${id}/images?api_key=${API_KEY}&language=${lang}`);
    return data.profiles;
  },
  async getActorTvs(id, lang = 'en') {
    const { data } = await axios.get(
      `${URL_BASE}/person/${id}/tv_credits?api_key=${API_KEY}&language=${lang}`
    );
    return data.cast;
  },
  async getActorMovies(id, lang = 'en') {
    const { data } = await axios.get(
      `${URL_BASE}/person/${id}/movie_credits?api_key=${API_KEY}&language=${lang}`
    );
    return data.cast;
  },
  async getById(id, lang = 'en') {
    const { data } = await axios.get(`${URL_BASE}/person/${id}?api_key=${API_KEY}&language=${lang}`);
    return data;
  },
};
