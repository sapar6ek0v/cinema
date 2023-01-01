import React from 'react';
import { useQuery } from 'react-query';
import { useLanguageContext } from '../../context/LanguageContext';
import { ActorServices } from '../../helpers/services/actorServices';
import ActorDetailsBody from './ActorDetailsBody';
import ActorDetailsHeader from './ActorDetailsHeader';

const ActorDetails = ({ id }) => {
  const { language } = useLanguageContext();
  const { data: item } = useQuery(['actor details', id, language], () => ActorServices.getById(id, language));
  console.log({ item });
  return (
    <>
      {!!item ? (
        <>
          <ActorDetailsHeader item={item} />
          <ActorDetailsBody id={id} />
        </>
      ) : null}
    </>
  );
};

export default ActorDetails;
