import axios from 'axios';
import { URL_BASE, API_KEY } from '../../constants/api';

export const VideoServices = {
  async getTrailersById(type, id, lang = 'en') {
    const { data } = await axios.get(`${URL_BASE}/${type}/${id}/videos?api_key=${API_KEY}&language=${lang}`);
    return data.results;
  },
  async getImagesById(type, id, lang = 'en') {
    const { data } = await axios.get(`${URL_BASE}/${type}/${id}/images?api_key=${API_KEY}&language=${lang}`);
    return [...data.posters, ...data.backdrops];
  },
};
