import React from 'react';
import { useTranslation } from 'react-i18next';

import { useMediaTypeContext } from '../../../context/MediaTypeContext';
import { Quantity, Header, Wrapper, List, Link, LinkTitle } from './styles';
import { mediaTypes } from './data';

const SearchResultNavbar = ({ list }) => {
  const { t } = useTranslation();
  const { mediaType, setMediaType } = useMediaTypeContext();

  const toggleMediaType = (typeValue) => setMediaType(typeValue);

  const displayListQuantity = (type) => {
    if (!!list) {
      return list.filter((item) => item.media_type === type).length;
    }
    return 0;
  };

  return (
    <Wrapper>
      <Header>{t('search.navbarResultTitle')}</Header>

      <List>
        {mediaTypes.map((item) => (
          <Link key={item.id} active={item.type === mediaType} onClick={() => toggleMediaType(item.type)}>
            <LinkTitle>{item.title}</LinkTitle>
            <Quantity>{displayListQuantity(item.type)}</Quantity>
          </Link>
        ))}
      </List>
    </Wrapper>
  );
};

export default SearchResultNavbar;
