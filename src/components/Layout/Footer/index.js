import React from 'react';
import dayjs from 'dayjs';
import { Container } from 'react-bootstrap';

import TMDBlogo from '../../../images/svgs/TMDB.svg';
import ListItem from './ListItem';
import SubscribeBlock from './SubscribeBlock';
import { Wrapper, Grid, ImageWrapper, Image, InformTitle } from './styles';

const Footer = () => {
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
          &copy; {dayjs(Date.now()).format('YYYY')}
          TMDB. All Rights Reserved. Designed and Developed by Eldiiar.
        </InformTitle>
      </Container>
    </Wrapper>
  );
};

export default Footer;
