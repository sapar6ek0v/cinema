import React from 'react';
import { faAngleRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

import { Title, Stack } from '../styles';
import { Description, Icon, Input, InputWrapper, SubscribeLink } from './styles';

const SubscribeBlock = () => {
  const { t } = useTranslation();

  return (
    <Stack>
      <Title>{t('layout.footer.newsletter')}</Title>
      <Description>{t('layout.footer.subscribeTitle')}</Description>
      <InputWrapper>
        <Input type="text" placeholder="Enter your email..." />
        <Icon icon={faEnvelope} />
      </InputWrapper>
      <SubscribeLink to={'/'}>
        {t('layout.footer.subscribeLink')} <FontAwesomeIcon icon={faAngleRight} />
      </SubscribeLink>
    </Stack>
  );
};

export default SubscribeBlock;
