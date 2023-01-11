export const determinePathByMediaType = (mediaType) => {
  switch (mediaType) {
    case 'tv':
      return 'tv-show-details';
    case 'movie':
      return 'movie-details';
    case 'person':
      return 'person-details';
    default:
      return '';
  }
};
