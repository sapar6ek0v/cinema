import React, { useRef, useState, useEffect } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

import {
  OverviewButton,
  OverviewDescription,
  OverviewFlexColumn,
  OverviewHeader,
  OverviewHiddenWrapper,
  OverviewTitle,
  OverviewVisibleWrapper,
} from './styles';

const Overview = ({ item }) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (parseInt(window.getComputedStyle(ref.current).height) < 300) {
      setIsVisible(true);
    }
  }, []);

  return (
    <OverviewFlexColumn gap={20}>
      <OverviewTitle>{item.name}</OverviewTitle>

      <OverviewHiddenWrapper gap={10} ref={ref} isVisible={isVisible}>
        <OverviewHeader>{t('actorDetails.biography')}</OverviewHeader>
        <OverviewDescription>{item.biography}</OverviewDescription>
        <OverviewVisibleWrapper hidden={isVisible}></OverviewVisibleWrapper>
      </OverviewHiddenWrapper>

      <OverviewButton hidden={isVisible} onClick={() => setIsVisible(true)}>
        {t('actorDetails.viewMore')} <FontAwesomeIcon icon={faAngleRight} />
      </OverviewButton>
    </OverviewFlexColumn>
  );
};

export default Overview;
