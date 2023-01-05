import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { Title } from '../../styles';
import { TrailersWrapper } from './styles';

const Trailers = () => {
  const { t } = useTranslation();

  return (
    <TrailersWrapper>
      <Container>
        <Title>{t('dashboard.trailerTitle')}</Title>
      </Container>
    </TrailersWrapper>
  );
};

export default Trailers;
