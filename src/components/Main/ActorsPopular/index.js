import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { API_KEY } from '../../../constants/api';
import { getImage } from '../../../helpers/getImage';
import advertise from '../../../image/advertise.jpg';
import {
  PopularActorWrapper,
  AdvertiseImage,
  PopularActorTitle,
  PopularActorLink,
  PopularActorImage,
  PopularActorName,
  PopularActorKnownFor,
  PopularActorVerticalWrapper,
  ViewAllPopularActorLink,
} from './styles';
import { AdvertiseTitle } from '../../styles';

const ActorsPopular = () => {
  const [popularActors, setPopularActors] = useState([]);

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US`).then(
      ({ data }) => {
        setPopularActors(data.results);
      }
    );
  }, []);

  return (
    <PopularActorWrapper>
      <div>
        <AdvertiseTitle>advertisement</AdvertiseTitle>
        <AdvertiseImage src={advertise} alt="advertise-image" />
      </div>
      <PopularActorTitle>SPOTLIGHT CELEBRITIES</PopularActorTitle>
      <PopularActorVerticalWrapper>
        {popularActors.slice(0, 4).map((person) => {
          const { id, profile_path, name, known_for_department } = person;
          return (
            <PopularActorLink key={id} to={`credits-info/${id}`}>
              <PopularActorImage src={getImage(profile_path)} alt={name} />
              <div>
                <PopularActorName>{name}</PopularActorName>
                <PopularActorKnownFor>{known_for_department}</PopularActorKnownFor>
              </div>
            </PopularActorLink>
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
