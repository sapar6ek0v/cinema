import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { MovieServices } from '../../../helpers/services/movieServices';
import { VideoServices } from '../../../helpers/services/videoServices';
import { useLanguageContext } from '../../../context/LanguageContext';
import { YOU_TUBE_URL } from '../../../constants/api';
import Loader from '../../Loader';
import { Title } from '../../styles';
import { Wrapper, Grid, ButtonStack, Button, IFrame } from './styles';

const Trailers = () => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const { data: movies, isLoading: isMoviesLoading } = useQuery(['now playing list', language], () =>
    MovieServices.getMoviesByType('now_playing', language)
  );

  const [currentMovie, setCurrentMovie] = useState(movies?.[0]?.id);
  const [currentMovieTrailers, setCurrentMovieTrailers] = useState([]);

  const { data: videos, isLoading: isVideoLoading } = useQuery(
    ['now playing movies videos', currentMovie, language],
    () => VideoServices.getTrailersById('movie', currentMovie, language)
  );

  useEffect(() => {
    movies && setCurrentMovie(movies[0].id);
  }, [movies]);

  useEffect(() => {
    const findTrailerAmongVideos = () => {
      if (!!videos) {
        const trailers = videos.filter((video) => video.type === 'Trailer');

        setCurrentMovieTrailers(trailers);
      }
    };

    findTrailerAmongVideos();
  }, [currentMovie, videos]);

  return (
    <Wrapper>
      {!isMoviesLoading ? (
        <Container>
          <Title>{t('main.trailerTitle')}</Title>
          <Grid>
            <IFrame className="ratio ratio-16x9" isLoading={isVideoLoading}>
              <iframe
                src={`${YOU_TUBE_URL}/${currentMovieTrailers?.[0]?.key || currentMovieTrailers?.[1]?.key}`}
                title={currentMovieTrailers?.[0]?.name || currentMovieTrailers?.[1]?.name}
              ></iframe>
            </IFrame>
            <ButtonStack>
              {!!movies
                ? movies.slice(0, 11).map((movie) => (
                    <Button
                      key={movie.id}
                      onClick={() => setCurrentMovie(movie.id)}
                      active={movie.id === currentMovie}
                    >
                      {movie.title}
                    </Button>
                  ))
                : null}
            </ButtonStack>
          </Grid>
        </Container>
      ) : (
        <Loader fixedCenter />
      )}
    </Wrapper>
  );
};

export default Trailers;
