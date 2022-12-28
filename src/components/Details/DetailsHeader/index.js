import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';

import { MovieServices } from '../../../helpers/services/movieServices';
import { useLanguageContext } from '../../../context/LanguageContext';
import { getImage } from '../../../helpers/getImage';
import { colors } from '../../../constants/colors';
import notFound from '../../../images/not-found.jpg';
import { Group } from '../../styles';
import FilmCrew from './FilmCrew';
import MediaLinks from './MediaLinks';
import CircularBar from './CircularBar';
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
} from './styles';
import ImageModal from './ImageModal';

const DetailsHeader = ({ type, id }) => {
  const { language } = useLanguageContext();
  const { data: item } = useQuery(`${type} details`, () => MovieServices.getById(type, id, language));

  const [isViewModalImage, setIsViewModalImage] = useState(false);

  const handleOpen = () => setIsViewModalImage(true);

  const handleClose = () => setIsViewModalImage(false);

  return (
    <>
      {!!item ? (
        <DetailsHeaderWrapper
          style={{
            background: `${colors.bg} url(${getImage(item.backdrop_path, 'original')}) center/cover`,
            backgroundBlendMode: 'darken',
          }}
        >
          <Container>
            <FlexContainer>
              <ImageContainer>
                <ImageWrapper onClick={handleOpen}>
                  <Image src={getImage(item.poster_path) || notFound} alt={item.title || item.name} />
                  <Expand>
                    Expand
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
                  <Time before>{item.runtime || item.episode_run_time} min</Time>
                </TextGroup>

                <MediaGroup gap={30}>
                  <CircularBar item={item} />
                  <MediaLinks id={id} type={type} homepage={item.homepage} />
                </MediaGroup>

                {<Tagline>"{item.tagline}"</Tagline> || 'No tagline'}
                <OverviewBlock>
                  <OverviewTitle>Overview</OverviewTitle>
                  <Overview>
                    {item.overview || "Sorry but we don't have information about this movie yet"}
                  </Overview>
                </OverviewBlock>
                <FilmCrew id={id} type={type} />
              </Column8>
            </FlexContainer>
          </Container>
        </DetailsHeaderWrapper>
      ) : null}
      {isViewModalImage && (
        <ImageModal onClose={handleClose} path={item?.backdrop_path} alt={item?.title || item?.name} />
      )}
    </>
  );
};

export default DetailsHeader;
