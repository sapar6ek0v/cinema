import React from 'react';
import { useQuery } from 'react-query';
import { Container } from 'react-bootstrap';

import { useLanguageContext } from '../../../context/LanguageContext';
import { MovieServices } from '../../../helpers/services/movieServices';
import { getImage } from '../../../helpers/getImage';
import { colors } from '../../../constants/colors';
import Loader from '../../Loader';
import Actors from './Actors';
import AdditionalInformation from './AdditionalInformation';
import Recommendations from './Recommendations';
import TrailersAndVideos from './TrailersAndVideos';
import { Column4, Column8, DetailsBodyWrapper, FlexContainer } from './styles';

const DetailsBody = ({ id, type, linkPath }) => {
  const { language } = useLanguageContext();
  const { data: item, isLoading } = useQuery([`${type} more details`, id, type], () =>
    MovieServices.getById(type, id, language)
  );

  return (
    <DetailsBodyWrapper>
      {!isLoading && !!item ? (
        <div
          style={{
            background: `${colors.bg2} url(${getImage(
              item.backdrop_path || item.poster_path,
              'original'
            )}) center/cover`,
            backgroundBlendMode: 'darken',
          }}
        >
          <Container>
            <FlexContainer>
              <Column8>
                <Actors id={id} type={type} />
                <TrailersAndVideos id={id} type={type} />
                <Recommendations id={id} type={type} linkPath={linkPath} />
              </Column8>
              <Column4>
                <AdditionalInformation id={id} type={type} />
              </Column4>
            </FlexContainer>
          </Container>
        </div>
      ) : (
        <Loader bg={colors.darkBlue2} />
      )}
    </DetailsBodyWrapper>
  );
};

export default DetailsBody;
