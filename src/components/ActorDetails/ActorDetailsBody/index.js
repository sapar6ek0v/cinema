import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

import { idGenerator } from '../../../helpers/idGenerator';
import ActorMoviesSlider from './ActorMoviesSlider';
import ActorTvsSlider from './ActorTvsSlider';
import { Title, Wrapper, ButtonGroup, Button } from './styles';

const ActorDetailsBody = ({ id }) => {
  const { t } = useTranslation();

  const buttonTypes = [
    {
      id: idGenerator(),
      title: t('actorDetails.movies'),
      type: 'movies',
    },
    {
      id: idGenerator(),
      title: t('actorDetails.tvShows'),
      type: 'tv-shows',
    },
  ];

  const [type, setType] = useState(buttonTypes[0].type);

  const toggleContent = (value) => setType(value);

  const switchContent = (value) => {
    switch (value) {
      case 'movie':
        return <ActorMoviesSlider id={id} />;
      case 'tv':
        return <ActorTvsSlider id={id} />;
      default:
        return <ActorMoviesSlider id={id} />;
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>{t('actorDetails.filmography')}</Title>
        <ButtonGroup>
          {buttonTypes.map((buttonType) => (
            <Button
              key={buttonType.id}
              onClick={() => toggleContent(buttonType.title)}
              active={type === buttonType.title}
            >
              #{buttonType.title}
            </Button>
          ))}
        </ButtonGroup>
        {switchContent(type)}
      </Container>
    </Wrapper>
  );
};

export default ActorDetailsBody;
