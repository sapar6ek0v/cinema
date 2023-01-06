import React from 'react';
import dayjs from 'dayjs';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import TMDBlogo from '../../../images/svgs/TMDB.svg';
import ListItem from './ListItem';
import SubscribeBlock from './SubscribeBlock';
import { Wrapper, Grid, ImageWrapper, Image, InformTitle } from './styles';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <Grid>
          <ImageWrapper>
            <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer">
              <Image src={TMDBlogo} alt="logo" />
            </a>
          </ImageWrapper>

          <ListItem />

          <SubscribeBlock />
        </Grid>

        <InformTitle>
          &copy; {dayjs(Date.now()).format('YYYY')} {t('layout.footer.title')}
        </InformTitle>
      </Container>
    </Wrapper>
  );
};

export default Footer;
