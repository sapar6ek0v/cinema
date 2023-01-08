import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { idGenerator } from '../../../helpers/idGenerator';
import { StyledContainer } from '../../styles';
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
      <StyledContainer>
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
      </StyledContainer>
    </Wrapper>
  );
};

export default ActorDetailsBody;
