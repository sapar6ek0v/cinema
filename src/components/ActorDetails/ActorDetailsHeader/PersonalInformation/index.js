import React from 'react';
import { useTranslation } from 'react-i18next';

import { FlexColumnContainer, Label, Text, Stack, Title, Wrapper } from './styles';

const PersonalInformation = ({ item }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t('actorDetails.personalInformation')}</Title>
      <FlexColumnContainer>
        <Stack>
          <Label>{t('actorDetails.knownForDepartment')}</Label>
          <Text>{item.known_for_department}</Text>
        </Stack>
        <Stack>
          <Label>{t('actorDetails.birthday')}</Label>
          <Text>{item.birthday}</Text>
        </Stack>
        <Stack>
          <Label>{t('actorDetails.placeOfBirth')}</Label>
          <Text>{item.place_of_birth}</Text>
        </Stack>
        <Stack>
          <Label>{t('actorDetails.alsoKnownAs')}</Label>
          <Text>{item.also_known_as}</Text>
        </Stack>
      </FlexColumnContainer>
    </Wrapper>
  );
};

export default PersonalInformation;
