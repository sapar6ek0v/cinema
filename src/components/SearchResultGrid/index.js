import React from 'react';
import { useMediaTypeContext } from '../../context/MediaTypeContext';
import Loader from '../Loader';
import SearchResultCard from './SearchResultCard';
import SearchResultNavbar from './SearchResultNavbar';
import { FlexContainer, Grid } from './styles';

const SearchResultGrid = ({ list, isLoading }) => {
  const { mediaType } = useMediaTypeContext();

  return (
    <>
      {!isLoading ? (
        <Grid>
          <SearchResultNavbar list={list} />

          {!!list ? (
            <FlexContainer>
              {list
                .filter((item) => item.media_type === mediaType)
                .map((item) => (
                  <SearchResultCard key={item.id} item={item} />
                ))}
            </FlexContainer>
          ) : null}
        </Grid>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SearchResultGrid;
