import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import { MovieServices } from '../../../helpers/services/movieServices';
import { useLanguageContext } from '../../../context/LanguageContext';
import { getImage } from '../../../helpers/getImage';
import { colors } from '../../../constants/colors';
import notFound from '../../../images/not-found.jpg';
import Loader from '../../Loader';
import MediaLinks from '../../MediaLinks';
import { Group } from '../../styles';
import FilmCrew from './FilmCrew';
import CircularBar from './CircularBar';
import ImageModal from './ImageModal';
import {
  ImageContainer,
  ReleaseYear,
  Column8,
  DetailsHeaderWrapper,
  Expand,
  FlexContainer,
  Image,
  ImageWrapper,
  Title,
  TextGroup,
  Time,
  Genre,
  MediaGroup,
  Tagline,
  Overview,
  OverviewBlock,
  OverviewTitle,
  Wrapper,
} from './styles';

const DetailsHeader = ({ type, id }) => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const { data: item, isLoading } = useQuery([`${type} details`, type, id, language], () =>
    MovieServices.getById(type, id, language)
  );

  const [isViewModalImage, setIsViewModalImage] = useState(false);

  const handleOpen = () => setIsViewModalImage(true);

  const handleClose = () => setIsViewModalImage(false);

  return (
    <Wrapper active={isLoading}>
      {!isLoading && !!item ? (
        <>
          <DetailsHeaderWrapper
            style={{
              background: `${colors.bg} url(${getImage(
                item.backdrop_path || item.poster_path,
                'original'
              )}) center/cover`,
              backgroundBlendMode: 'darken',
            }}
          >
            <Container>
              <FlexContainer>
                <ImageContainer>
                  <ImageWrapper onClick={handleOpen}>
                    <Image src={getImage(item.poster_path) || notFound} alt={item.title || item.name} />
                    <Expand>
                      {t('details.imageExpand')}
                      <FontAwesomeIcon icon={faExpandArrowsAlt} />
                    </Expand>
                  </ImageWrapper>
                </ImageContainer>

                <Column8>
                  <Title>
                    {item.title || item.name}
                    <ReleaseYear>({dayjs(item.release_date).format('YYYY')})</ReleaseYear>
                  </Title>

                  <TextGroup gap={15}>
                    <Time after>{dayjs(item.release_date || item.first_air_date).format('YYYY/MM/DD')}</Time>
                    <Group gap={5}>
                      {item.genres?.map((genre, idx) => (
                        <Genre key={genre + idx}>{genre.name}</Genre>
                      ))}
                    </Group>
                    <Time before>
                      {item.runtime || item.episode_run_time} {t('details.minutes')}
                    </Time>
                  </TextGroup>

                  <MediaGroup gap={30}>
                    <CircularBar item={item} />
                    <MediaLinks id={id} type={type} homepage={item.homepage} />
                  </MediaGroup>

                  {<Tagline>"{item.tagline || t('details.notFoundTagline')}"</Tagline>}
                  <OverviewBlock>
                    <OverviewTitle> {t('details.overview')}</OverviewTitle>
                    <Overview>{item.overview || t('details.notFoundOverviewTitle')}</Overview>
                  </OverviewBlock>
                  <FilmCrew id={id} type={type} />
                </Column8>
              </FlexContainer>
            </Container>
          </DetailsHeaderWrapper>

          {isViewModalImage && (
            <ImageModal onClose={handleClose} path={item.backdrop_path} alt={item.title || item.name} />
          )}
        </>
      ) : (
        <Loader bg={colors.darkBlue} />
      )}
    </Wrapper>
  );
};

export default DetailsHeader;
