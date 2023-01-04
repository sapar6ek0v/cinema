import React from 'react';
import { faAngleRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Title, Stack } from '../styles';
import { Description, Icon, Input, InputWrapper, SubscribeLink } from './styles';

const SubscribeBlock = () => {
  return (
    <Stack>
      <Title>Newsletter</Title>
      <Description>Subscribe to our newsletter system now to get latest news from us.</Description>
      <InputWrapper>
        <Input type="text" placeholder="Enter your email..." />
        <Icon icon={faEnvelope} />
      </InputWrapper>
      <SubscribeLink to={'/'}>
        subscribe now <FontAwesomeIcon icon={faAngleRight} />
      </SubscribeLink>
    </Stack>
  );
};

export default SubscribeBlock;
