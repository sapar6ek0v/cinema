import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { getImage } from '../../../helpers/getImage';
import MediaLinks from '../../MediaLinks';
import { buttonTypes } from './data';
import Overview from './Overview';
import PersonalInformation from './PersonalInformation';
import PhotoGallery from './PhotoGallery';
import { Button, ButtonGroup, FlexContainer, Image, Stack, Title, Wrapper } from './styles';

const ActorDetailsHeader = ({ item }) => {
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
