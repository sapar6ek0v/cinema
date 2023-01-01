import React from 'react';
import { useQuery } from 'react-query';
import { useLanguageContext } from '../../../../context/LanguageContext';
import { ActorServices } from '../../../../helpers/services/actorServices';
import { getImage } from '../../../../helpers/getImage';
import { Grid, Image, ImageCard } from './styles';

const PhotoGallery = ({ id, alt }) => {
  const { language } = useLanguageContext();
  const { data: images } = useQuery(['actor images list', id, language], () =>
    ActorServices.getActorImages(id, language)
  );

  return (
    <Grid>
      {!!images
        ? images.slice(0, 8).map((image) => {
            return (
              <ImageCard key={Date.now() + Math.random() * 1000}>
                <Image src={getImage(image.file_path)} alt={alt} />
              </ImageCard>
            );
          })
        : null}
    </Grid>
  );
};

export default PhotoGallery;
