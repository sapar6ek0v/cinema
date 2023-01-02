import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import { useLanguageContext } from '../../context/LanguageContext';
import { firstLetterUpperCase } from '../../helpers/firstLetterUpperCase';
import { MovieServices } from '../../helpers/services/movieServices';
import SEO from '../../components/SEO';
import PageWithPagination from '../../components/PageWithPagination';

const Movies = () => {
  const { language } = useLanguageContext();

  const [query, setQuery] = useSearchParams();

  const [page, setPage] = useState(query.get('page') || 1);
  const [type, setType] = useState(query.get('type') || 'popular');

  const { data } = useQuery(['movie list', type, page], () =>
    MovieServices.getMoviesByType(type, language, page)
  );

  const togglePage = (num) => {
    setPage(num);
    const params = { type, page: num };
    setQuery(params);
  };

  const handleChangeType = (type) => {
    setType(type);
    const params = { type, page };
    setQuery(params);
  };

  return (
    <>
      <SEO
        title={`${firstLetterUpperCase(type)} movies`}
        description={`${firstLetterUpperCase(type)} movie list`}
        name="Movie Api Project"
        type="project"
      />
      {!!data ? (
        <PageWithPagination
          list={data}
          types={['now_playing', 'popular', 'top_rated', 'upcoming']}
          currentType={type}
          page={page}
          togglePage={togglePage}
          handleChangeType={handleChangeType}
          linkPath="movie-details"
        />
      ) : null}
    </>
  );
};

export default Movies;
