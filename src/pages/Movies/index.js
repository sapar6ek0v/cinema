import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useLanguageContext } from '../../context/LanguageContext';
import { firstLetterUpperCase } from '../../helpers/firstLetterUpperCase';
import { MovieServices } from '../../helpers/services/movieServices';
import { colors } from '../../constants/colors';
import SEO from '../../components/SEO';
import PageWithPagination from '../../components/PageWithPagination';
import { Wrapper } from '../../components/styles';
import Loader from '../../components/Loader';

const Movies = () => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(query.get('page') || 1);
  const { data, isLoading } = useQuery(['movie list', query.get('type'), language, page], () =>
    MovieServices.getMoviesByType(query.get('type'), language, page)
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
    <Wrapper>
      <SEO
        title={t('movies.helmetTitle', { title: firstLetterUpperCase(query.get('type')) })}
        description={t('movies.helmetDescription', { title: firstLetterUpperCase(query.get('type')) })}
        name={t('movies.helmetName')}
        type={t('movies.helmetType')}
      />
      {!isLoading && !!data ? (
        <PageWithPagination
          list={data}
          types={['now_playing', 'popular', 'top_rated', 'upcoming']}
          currentType={query.get('type')}
          page={page}
          togglePage={togglePage}
          handleChangeType={handleChangeType}
          linkPath="movie-details"
        />
      ) : (
        <Loader bg={colors.darkBlue} />
      )}
    </Wrapper>
  );
};

export default Movies;
