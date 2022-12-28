import axios from 'axios';
import { URL_BASE, API_KEY } from '../../constants/api';

export const SocialMediaServices = {
  async getSocialMediaLinksById(type, id, lang = 'en') {
    const { data } = await axios.get(
      `${URL_BASE}/${type}/${id}/external_ids?api_key=${API_KEY}&language=${lang}`
    );
    return data;
  },
};
