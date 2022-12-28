import React from 'react';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { useLanguageContext } from '../../../context/LanguageContext';
import { MovieServices } from '../../../helpers/services/movieServices';
import { getImage } from '../../../helpers/getImage';
import { colors } from '../../../constants/colors';
import Actors from './Actors';
import AdditionalInformation from './AdditionalInformation';
import Recommendations from './Recommendations';
import TrailersAndVideos from './TrailersAndVideos';
import { Column4, Column8, DetailsBodyWrapper, FlexContainer } from './styles';

const DetailsBody = ({ id, type }) => {
  const { language } = useLanguageContext();
  const { data: item } = useQuery(`${type} more details`, () => MovieServices.getById(type, id, language));

  return (
    <DetailsBodyWrapper
      style={{
        background: `${colors.bg2} url(${getImage(item?.backdrop_path, 'original')}) center/cover`,
        backgroundBlendMode: 'darken',
      }}
    >
      <Container>
        <FlexContainer>
          <Column8>
            <Actors id={id} type={type} />
            <TrailersAndVideos id={id} type={type} />
            <Recommendations id={id} type={type} />
          </Column8>
          <Column4>
            <AdditionalInformation id={id} type={type} />
          </Column4>
        </FlexContainer>
      </Container>
    </DetailsBodyWrapper>
  );
};

export default DetailsBody;
