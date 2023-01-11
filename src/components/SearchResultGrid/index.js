import React from 'react';
import { useTranslation } from 'react-i18next';

import { useMediaTypeContext } from '../../context/MediaTypeContext';
import { NoFoundTitle } from '../styles';
import Loader from '../Loader';
import SearchResultCard from './SearchResultCard';
import SearchResultNavbar from './SearchResultNavbar';
import { FlexContainer, Grid } from './styles';

const SearchResultGrid = ({ list, isLoading }) => {
  const { t } = useTranslation();
  const { mediaType } = useMediaTypeContext();

  return (
    <>
      {!isLoading ? (
        <Grid>
          <SearchResultNavbar list={list} />

          {!!list?.length ? (
            <FlexContainer>
              {list
                .filter((item) => item.media_type === mediaType)
                .map((item) => (
                  <SearchResultCard key={item.id} item={item} />
                ))}
            </FlexContainer>
          ) : (
            <NoFoundTitle>{t('search.notFoundTitle')}</NoFoundTitle>
          )}
        </Grid>
      ) : (
        <Loader fixedCenter />
      )}
    </>
  );
};

export default SearchResultGrid;
