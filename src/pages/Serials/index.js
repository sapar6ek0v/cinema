import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import { useLanguageContext } from '../../context/LanguageContext';
import { firstLetterUpperCase } from '../../helpers/firstLetterUpperCase';
import { MovieServices } from '../../helpers/services/movieServices';
import SEO from '../../components/SEO';
import PageWithPagination from '../../components/PageWithPagination';

const Serials = () => {
  const { language } = useLanguageContext();

  const [query, setQuery] = useSearchParams();

  const [page, setPage] = useState(query.get('page') || 1);
  const [type, setType] = useState(query.get('type') || 'popular');

  const { data } = useQuery(['tv list', type, page, language], () =>
    MovieServices.getTvsByType(type, language, page)
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
        title={`${firstLetterUpperCase(type)} tvs`}
        description={`${firstLetterUpperCase(type)} tv list`}
        name="Movie Api Project"
        type="project"
      />
      {!!data ? (
        <PageWithPagination
          list={data}
          types={['airing_today', 'on_the_air', 'popular', 'top_rated']}
          currentType={type}
          page={page}
          togglePage={togglePage}
          handleChangeType={handleChangeType}
          linkPath="tv-serials/serials-info"
        />
      ) : null}
    </>
  );
};

export default Serials;
