import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

import { useLanguageContext } from '../../../../context/LanguageContext';
import { getImage } from '../../../../helpers/getImage';
import { ActorServices } from '../../../../helpers/services/actorServices';
import anonym from '../../../../images/anonym.jpg';
import { NoFoundTitle } from '../../../styles';
import { ContentFlexContainer, ContentWrapper, SliderContainer, Title } from '../styles';
import { ActorCharacter, ActorImage, ActorName, ActorsCard, Button, ButtonCenter } from './styles';

const Actors = ({ type, id }) => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const { data: actors } = useQuery([`${type} actors list`, type, id, language], () =>
    ActorServices.getActorsById(type, id, language)
  );
  const [more, setMore] = useState(10);

  return (
    <ContentWrapper>
      <Container>
        <ContentFlexContainer>
          <Title>#{t('details.castTitle')}</Title>
          <SliderContainer>
            {!!actors?.length ? (
              actors.slice(0, more).map((actor) => {
                return (
                  <ActorsCard key={actor.id}>
                    <ActorImage
                      src={actor.profile_path ? `${getImage(actor.profile_path)}` : anonym}
                      alt={actor.name}
                    />
                    <ActorName to={`/person-details/${actor.id}`}>{actor.name}</ActorName>
                    <ActorCharacter>{actor.character}</ActorCharacter>
                  </ActorsCard>
                );
              })
            ) : (
              <NoFoundTitle>{t('details.notFoundCastTitle')}</NoFoundTitle>
            )}
            {more < actors?.length ? (
              <ButtonCenter>
                <Button onClick={() => setMore(more + 10)} type="button" aria-label="more actors button">
                  {t('details.viewMore')}...
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
