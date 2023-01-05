import React, { useState } from 'react';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { getImage } from '../../../../helpers/getImage';
import { VideoServices } from '../../../../helpers/services/videoServices';
import { useLanguageContext } from '../../../../context/LanguageContext';
import { NoFoundTitle } from '../../../styles';
import { ContentFlexContainer, ContentWrapper, SliderContainer, Title } from '../styles';
import TrailerModal from './TrailerModal';
import { Card, CardWrapper, Image, ImageWrapper, StartIcon, Header, QuantityTitle } from './styles';

const TrailersAndVideos = ({ type, id }) => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const { data: videos } = useQuery([`${type} videos list`, type, id, language], () =>
    VideoServices.getTrailersById(type, id, language)
  );
  const { data: images } = useQuery([`${type} images list`, id, type, language], () =>
    VideoServices.getImagesById(type, id, language)
  );

  const [videoKey, setVideoKey] = useState('');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleStartTrailer = (key) => {
    setVideoKey(key);
    setIsVideoModalOpen(true);
  };

  const handleClose = () => setIsVideoModalOpen(false);

  return (
    <>
      <ContentWrapper>
        <Container>
          <ContentFlexContainer>
            <Title>#{t('details.mediaTitle')}</Title>
            <SliderContainer>
              {!!videos?.length && !!images ? (
                videos.map((video, idx) => {
                  const poster = images[idx]
                    ? `${getImage(images[idx]?.file_path)}`
                    : `${getImage(images[0]?.file_path)}`;

                  return (
                    <CardWrapper key={video.id}>
                      <Card>
                        <ImageWrapper>
                          <StartIcon icon={faPlayCircle} onClick={() => handleStartTrailer(video.key)} />
                          <Image src={poster} alt="poster" />
                        </ImageWrapper>
                        <Header>{video.name}</Header>
                        <QuantityTitle>
                          {video.size}
                          <span>HD</span>
                        </QuantityTitle>
                      </Card>
                    </CardWrapper>
                  );
                })
              ) : (
                <NoFoundTitle>{t('details.notFoundTrailerTitle')}</NoFoundTitle>
              )}
            </SliderContainer>
          </ContentFlexContainer>
        </Container>
      </ContentWrapper>
      {isVideoModalOpen && <TrailerModal onClose={handleClose} videoKey={videoKey} />}
    </>
  );
};

export default TrailersAndVideos;
