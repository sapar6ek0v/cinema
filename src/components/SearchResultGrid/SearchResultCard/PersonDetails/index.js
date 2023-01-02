import React from 'react';

import { getImage } from '../../../../helpers/getImage';
import anonym from '../../../../images/profile.jpg';
import { determinePathByMediaType } from '../../helpers/functions';
import { Image, TitleLink } from '../styles';
import { Details, Group, ImageWrapper, KnownForLink, KnownForTitle } from './styles';

const PersonDetails = ({ item }) => {
  return (
    <>
      <ImageWrapper>
        <Image
          src={item.profile_path ? getImage(item.profile_path) : anonym}
          alt={item.name || item.title}
          loading="lazy"
        />
      </ImageWrapper>

      <Details>
        <TitleLink to={`/${determinePathByMediaType(item.media_type)}/${item.id}`}>{item.name}</TitleLink>
        <Group>
          <KnownForTitle>{item.known_for_department}</KnownForTitle>
          {item.known_for.map((item) => (
            <KnownForLink key={item.id} to={`/${determinePathByMediaType(item.media_type)}/${item.id}`}>
              {item.name || item.title}
            </KnownForLink>
          ))}
        </Group>
      </Details>
    </>
  );
};

export default PersonDetails;
