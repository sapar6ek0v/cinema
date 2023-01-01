import React from 'react';
import { FlexColumnContainer, Label, Text, Stack, Title, Wrapper } from './styles';

const PersonalInformation = ({ item }) => {
  return (
    <Wrapper>
      <Title>Personal information</Title>
      <FlexColumnContainer>
        <Stack>
          <Label>Known for department</Label>
          <Text>{item.known_for_department}</Text>
        </Stack>
        <Stack>
          <Label>Birthday</Label>
          <Text>{item.birthday}</Text>
        </Stack>
        <Stack>
          <Label>Place of birth</Label>
          <Text>{item.place_of_birth}</Text>
        </Stack>
        <Stack>
          <Label>Also known as</Label>
          <Text>{item.also_known_as}</Text>
        </Stack>
      </FlexColumnContainer>
    </Wrapper>
  );
};

export default PersonalInformation;
