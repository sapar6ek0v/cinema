import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { getImage } from '../../../helpers/getImage';
import { idGenerator } from '../../../helpers/idGenerator';
import MediaLinks from '../../MediaLinks';
import Overview from './Overview';
import PersonalInformation from './PersonalInformation';
import PhotoGallery from './PhotoGallery';
import { Button, ButtonGroup, FlexContainer, Image, Stack, Title, Wrapper } from './styles';

const ActorDetailsHeader = ({ item }) => {
  const { t } = useTranslation();

  const buttonTypes = [
    {
      id: idGenerator(),
      title: t('actorDetails.overview'),
      type: 'overview',
    },
    {
      id: idGenerator(),
      title: t('actorDetails.personalInformation'),
      type: 'personal_information',
    },
    {
      id: idGenerator(),
      title: t('actorDetails.media'),
      type: 'media',
    },
  ];

  const [type, setType] = useState(buttonTypes[0].type);

  const toggleContent = (value) => setType(value);

  const switchContent = (value) => {
    switch (value) {
      case 'overview':
        return <Overview item={item} />;
      case 'personal_information':
        return <PersonalInformation item={item} />;
      case 'media':
        return <PhotoGallery id={item.id} alt={item.name} />;
      default:
        return <Overview item={item} />;
    }
  };

  return (
    <Wrapper>
      <Container>
        <FlexContainer>
          <Image src={getImage(item.profile_path)} alt={item.name} />

          <Stack>
            <Title>{item.name}</Title>
            <MediaLinks id={item.id} type="person" />
            <ButtonGroup>
              {buttonTypes.map((buttonType) => (
                <Button
                  key={buttonType.id}
                  onClick={() => toggleContent(buttonType.type)}
                  active={buttonType.type === type}
                >
                  {buttonType.title}
                </Button>
              ))}
            </ButtonGroup>
            {switchContent(type)}
          </Stack>
        </FlexContainer>
      </Container>
    </Wrapper>
  );
};

export default ActorDetailsHeader;
