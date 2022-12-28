import axios from 'axios';
import { URL_BASE, API_KEY } from '../../constants/api';

export const RecommendationServices = {
  async getRecommendationsById(type, id, lang = 'en') {
    const { data } = await axios.get(
      `${URL_BASE}/${type}/${id}/recommendations?api_key=${API_KEY}&language=${lang}`
    );
    return data.results;
  },
};
