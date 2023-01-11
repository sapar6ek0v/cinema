import React from 'react';

import Details from './Details';
import PersonDetails from './PersonDetails';
import { Wrapper } from './styles';

const SearchResultCard = ({ item }) => {
  return (
    <Wrapper>
      {item.media_type === 'person' ? <PersonDetails item={item} /> : <Details item={item} />}
    </Wrapper>
  );
};

export default SearchResultCard;
