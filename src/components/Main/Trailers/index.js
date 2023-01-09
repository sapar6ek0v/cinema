import React from 'react';
import { useTranslation } from 'react-i18next';

import { StyledContainer, Title } from '../../styles';
import { Wrapper } from './styles';

const Trailers = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <StyledContainer>
        <Title>{t('main.trailerTitle')}</Title>
      </StyledContainer>
    </Wrapper>
  );
};

export default Trailers;
