import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SEO from '../../components/SEO';
import Details from '../../components/Details';

const SerialDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  return (
    <>
      <SEO
        title={t('tvShowDetails.helmetTitle')}
        description={t('tvShowDetails.helmetDescription')}
        name={t('tvShowDetails.helmetName')}
        type={t('tvShowDetails.helmetType')}
      />
      <Details id={id} type="tv" linkPath="tv-show-details" />
    </>
  );
};

export default SerialDetails;
