import React from 'react';
import { useTranslation } from 'react-i18next';

import advertise from '../../../../images/advertise.jpg';
import { AdvertiseTitle } from '../../styles';
import { AdvertiseImage, Wrapper, Stack } from './styles';

const LeftSide = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <AdvertiseTitle>{t('main.advertisement')}</AdvertiseTitle>
      <Stack>
        <AdvertiseImage src={advertise} alt="advertise-image" />
        <AdvertiseImage src={advertise} alt="advertise-image" />
        <AdvertiseImage src={advertise} alt="advertise-image" />
      </Stack>
    </Wrapper>
  );
};

export default LeftSide;
