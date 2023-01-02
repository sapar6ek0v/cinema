import React from 'react';
import { useMediaTypeContext } from '../../../context/MediaTypeContext';
import { Quantity, Header, Wrapper, List, Link, LinkTitle } from './styles';
import { mediaTypes } from './data';

const SearchResultNavbar = ({ list }) => {
  const { mediaType, setMediaType } = useMediaTypeContext();

  const toggleMediaType = (typeValue) => setMediaType(typeValue);

  const displayListQuantity = (listArray, type) =>
    listArray.filter((item) => item.media_type === type).length;

  return (
    <Wrapper>
      <Header>Search Results</Header>

      <List>
        {mediaTypes.map((item) => (
          <Link key={item.id} active={item.type === mediaType} onClick={() => toggleMediaType(item.type)}>
            <LinkTitle>{item.title}</LinkTitle>
            <Quantity>{displayListQuantity(list, item.type)}</Quantity>
          </Link>
        ))}
      </List>
    </Wrapper>
  );
};

export default SearchResultNavbar;
