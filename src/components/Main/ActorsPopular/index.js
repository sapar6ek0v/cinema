import React from 'react';
import { useQuery } from 'react-query';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  const { data: popularActors } = useQuery('popular actor list', () => ActorServices.getPopularActors());

  return (
    <PopularActorWrapper>
      <div>
        <AdvertiseTitle>advertisement</AdvertiseTitle>
        <AdvertiseImage src={advertise} alt="advertise-image" />
      </div>
      <PopularActorTitle>SPOTLIGHT CELEBRITIES</PopularActorTitle>
      <PopularActorVerticalWrapper>
        {popularActors?.slice(0, 4).map((person) => {
          const { id, profile_path, name, known_for_department } = person;
          return (
            <PopularActorCard key={id}>
              <PopularActorImage src={getImage(profile_path)} alt={name} />
              <div>
                <PopularActorName to={`credits-info/${id}`}>{name}</PopularActorName>
                <PopularActorKnownFor>{known_for_department}</PopularActorKnownFor>
              </div>
            </PopularActorCard>
          );
        })}
        <ViewAllPopularActorLink to="/">
          SEE ALL CELEBRITIES <FontAwesomeIcon icon={faAngleRight} />
        </ViewAllPopularActorLink>
      </PopularActorVerticalWrapper>
    </PopularActorWrapper>
  );
};

export default ActorsPopular;
