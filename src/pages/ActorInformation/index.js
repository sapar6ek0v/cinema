import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SEO from '../../components/SEO';
import ActorDetails from '../../components/ActorDetails';

const ActorInformation = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  return (
    <>
      <SEO
        title={t('actorDetails.helmetTitle')}
        description={t('actorDetails.helmetDescription')}
        name={t('actorDetails.helmetName')}
        type={t('actorDetails.helmetType')}
      />

      <ActorDetails id={id} />
    </>
  );
};

export default ActorInformation;
