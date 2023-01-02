export const determinePathByMediaType = (mediaType) => {
  switch (mediaType) {
    case 'tv':
      return 'tv-serials/serials-info';
    case 'movie':
      return 'movie-info';
    case 'person':
      return 'credits-info';
    default:
      return '';
  }
};
