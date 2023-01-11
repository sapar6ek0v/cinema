import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

import MediaTypeProvider from '../../context/MediaTypeContext';
import { useLanguageContext } from '../../context/LanguageContext';
import { SearchServices } from '../../helpers/services/searchServices';
import { useDebounce } from '../../hooks/useDebounce';
import SearchResultGrid from '../../components/SearchResultGrid';
import SEO from '../../components/SEO';
import { SearchInput, Wrapper, FlexContainer } from './styles';

const SearchResults = () => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const [queryParams, setQueryParams] = useSearchParams();
  const [query, setQuery] = useState(queryParams.get('query'));
  const debounceValue = useDebounce(query, 500);

  const { data, isLoading } = useQuery(
    ['search results', debounceValue, language],
    () => SearchServices.multiSearch(debounceValue, language),
    {
      enabled: !!debounceValue,
    }
  );

  const handleOnChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    const params = { query: value };
    setQueryParams(params);
  };

  return (
    <MediaTypeProvider>
      <SEO
        title={t('search.helmetTitle')}
        description={t('search.helmetDescription')}
        name={t('search.helmetName')}
        type={t('search.helmetType')}
      />
      <Wrapper>
        <Container>
          <FlexContainer>
            <SearchInput
              onChange={handleOnChange}
              value={query}
              type="text"
              aria-label="search"
              placeholder={t('search.inputPlaceholder')}
            />

            <SearchResultGrid list={data} isLoading={isLoading} />
          </FlexContainer>
        </Container>
      </Wrapper>
    </MediaTypeProvider>
  );
};

export default SearchResults;
