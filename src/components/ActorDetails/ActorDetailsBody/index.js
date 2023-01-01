import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ActorMoviesSlider from './ActorMoviesSlider';

import ActorTvsSlider from './ActorTvsSlider';
import { buttonTypes } from './data';
import { Title, Wrapper, ButtonGroup, Button } from './styles';

const ActorDetailsBody = ({ id }) => {
  const [type, setType] = useState(buttonTypes[0].title);

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
        <Title>FILMOGRAPHY</Title>
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
