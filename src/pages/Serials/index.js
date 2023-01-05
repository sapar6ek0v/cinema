import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useLanguageContext } from '../../context/LanguageContext';
import { firstLetterUpperCase } from '../../helpers/firstLetterUpperCase';
import { MovieServices } from '../../helpers/services/movieServices';
import SEO from '../../components/SEO';
import PageWithPagination from '../../components/PageWithPagination';

const Serials = () => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(query.get('page') || 1);
  const { data } = useQuery(['tv list', query.get('type'), page, language], () =>
    MovieServices.getTvsByType(query.get('type'), language, page)
  );

  const togglePage = (num) => {
    setPage(num);
    const params = { type: query.get('type'), page: num };
    setQuery(params);
  };

  const handleChangeType = (type) => {
    const params = { type, page };
    setQuery(params);
  };

  return (
    <>
      <SEO
        title={t('tvShows.helmetTitle', { title: firstLetterUpperCase(query.get('type')) })}
        description={t('tvShows.helmetDescription', { title: firstLetterUpperCase(query.get('type')) })}
        name={t('tvShows.helmetName')}
        type={t('tvShows.helmetType')}
      />
      {!!data ? (
        <PageWithPagination
          list={data}
          types={['airing_today', 'on_the_air', 'popular', 'top_rated']}
          currentType={query.get('type')}
          page={page}
          togglePage={togglePage}
          handleChangeType={handleChangeType}
          linkPath="tv-show-details"
        />
      ) : null}
    </>
  );
};

export default Serials;
