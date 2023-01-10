import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

import { Title } from '../../styles';
import { Wrapper } from './styles';

const Trailers = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <Title>{t('main.trailerTitle')}</Title>
      </Container>
    </Wrapper>
  );
};

export default Trailers;
