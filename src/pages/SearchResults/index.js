import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';

import MediaTypeProvider from '../../context/MediaTypeContext';
import { useLanguageContext } from '../../context/LanguageContext';
import { SearchServices } from '../../helpers/services/searchServices';
import { useDebounce } from '../../hooks/useDebounce';
import SearchResultGrid from '../../components/SearchResultGrid';
import SEO from '../../components/SEO';
import { SearchInput, Wrapper, FlexContainer } from './styles';

const SearchResults = () => {
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
        title="Search"
        description="Search for a movie, TV Show or celebrity that you are looking for"
        name="Movie Api Project"
        type="project"
      />
      <Wrapper>
        <Container>
          <FlexContainer>
            <SearchInput
              onChange={handleOnChange}
              value={query}
              type="text"
              aria-label="search"
              placeholder="Search for a movie, TV Show or celebrity that you are looking for"
            />

            <SearchResultGrid list={data} isLoading={isLoading} />
          </FlexContainer>
        </Container>
      </Wrapper>
    </MediaTypeProvider>
  );
};

export default SearchResults;
