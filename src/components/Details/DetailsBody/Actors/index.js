import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { useLanguageContext } from '../../../../context/LanguageContext';
import { getImage } from '../../../../helpers/getImage';
import { ActorServices } from '../../../../helpers/services/actorServices';
import anonym from '../../../../images/profile.jpg';
import { ContentFlexContainer, ContentWrapper, SliderContainer, Title } from '../styles';
import { ActorCharacter, ActorImage, ActorName, ActorsCard, Button, ButtonCenter } from './styles';

const Actors = ({ type, id }) => {
  const { language } = useLanguageContext();
  const { data: actors } = useQuery(`${type} actors list`, () =>
    ActorServices.getActorsById(type, id, language)
  );
  const [more, setMore] = useState(10);

  return (
    <ContentWrapper>
      <Container>
        <ContentFlexContainer>
          <Title>#Starring</Title>
          <SliderContainer>
            {!!actors
              ? actors.slice(0, more).map((actor) => {
                  return (
                    <ActorsCard key={actor.id}>
                      <ActorImage
                        src={actor.profile_path ? `${getImage(actor.profile_path)}` : anonym}
                        alt={actor.name}
                      />
                      <ActorName to={`/credits-info/${actor.id}`}>{actor.name}</ActorName>
                      <ActorCharacter>{actor.character}</ActorCharacter>
                    </ActorsCard>
                  );
                })
              : null}
            {more < actors?.length ? (
              <ButtonCenter>
                <Button onClick={() => setMore(more + 10)} type="button" aria-label="more actors button">
                  Смотреть ещё...
                  <span>
                    <FontAwesomeIcon icon={faUserPlus} />
                  </span>
                </Button>
              </ButtonCenter>
            ) : null}
          </SliderContainer>
        </ContentFlexContainer>
      </Container>
    </ContentWrapper>
  );
};

export default Actors;
