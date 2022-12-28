import React from 'react';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { MediaLink, MediaLinksWrapper } from './styles';
import { SocialMediaServices } from '../../../../helpers/services/socialMediaServices';
import { useLanguageContext } from '../../../../context/LanguageContext';

const MediaLinks = ({ homepage, type, id }) => {
  const { language } = useLanguageContext();
  const { data: mediaLinks } = useQuery(`${type} social media links`, () =>
    SocialMediaServices.getSocialMediaLinksById(type, id, language)
  );

  const instagramUrl = 'https://www.instagram.com/';
  const twitterUrl = 'https://twitter.com/';
  const facebookUrl = 'https://www.facebook.com/';

  return (
    <MediaLinksWrapper>
      <MediaLink href={homepage} target="_blank">
        <FontAwesomeIcon icon={faHome} />
      </MediaLink>
      {!!mediaLinks ? (
        <>
          <MediaLink href={`${instagramUrl}${mediaLinks.instagram_id}/` || `${instagramUrl}`} target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </MediaLink>

          <MediaLink href={`${facebookUrl}${mediaLinks.facebook_id}/` || `${facebookUrl}`} target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </MediaLink>

          <MediaLink href={`${twitterUrl}${mediaLinks.twitter_id}/` || `${twitterUrl}`} target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </MediaLink>
        </>
      ) : null}
    </MediaLinksWrapper>
  );
};

export default MediaLinks;
