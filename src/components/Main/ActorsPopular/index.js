import React from 'react';
import { useQuery } from 'react-query';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

import { useLanguageContext } from '../../../context/LanguageContext';
import { ActorServices } from '../../../helpers/services/actorServices';
import { getImage } from '../../../helpers/getImage';
import advertise from '../../../images/advertise.jpg';
import { AdvertiseTitle } from '../../styles';
import {
  PopularActorWrapper,
  AdvertiseImage,
  PopularActorTitle,
  PopularActorCard,
  PopularActorImage,
  PopularActorName,
  PopularActorKnownFor,
  PopularActorVerticalWrapper,
  ViewAllPopularActorLink,
} from './styles';

const ActorsPopular = () => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const { data: popularActors } = useQuery(['popular actor list', language], () =>
    ActorServices.getPopularActors(language)
  );

  return (
    <PopularActorWrapper>
      <div>
        <AdvertiseTitle>{t('main.advertisement')}</AdvertiseTitle>
        <AdvertiseImage src={advertise} alt="advertise-image" />
      </div>
      <PopularActorTitle>{t('main.sidebarTitle')}</PopularActorTitle>
      <PopularActorVerticalWrapper>
        {!!popularActors
          ? popularActors.slice(0, 4).map((person) => {
              const { id, profile_path, name, known_for_department } = person;
              return (
                <PopularActorCard key={id}>
                  <PopularActorImage src={getImage(profile_path)} alt={name} />
                  <div>
                    <PopularActorName to={`/person-details/${id}`}>{name}</PopularActorName>
                    <PopularActorKnownFor>{known_for_department}</PopularActorKnownFor>
                  </div>
                </PopularActorCard>
              );
            })
          : null}
        <ViewAllPopularActorLink to="/">
          {t('main.sidebarLink')} <FontAwesomeIcon icon={faAngleRight} />
        </ViewAllPopularActorLink>
      </PopularActorVerticalWrapper>
    </PopularActorWrapper>
  );
};

export default ActorsPopular;
