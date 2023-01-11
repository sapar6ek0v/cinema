import React from 'react';
import { useQuery } from 'react-query';

import { colors } from '../../constants/colors';
import { useLanguageContext } from '../../context/LanguageContext';
import { ActorServices } from '../../helpers/services/actorServices';
import Loader from '../Loader';
import ActorDetailsBody from './ActorDetailsBody';
import ActorDetailsHeader from './ActorDetailsHeader';
import { Wrapper } from './styles';

const ActorDetails = ({ id }) => {
  const { language } = useLanguageContext();
  const { data: item, isLoading } = useQuery(['actor details', id, language], () =>
    ActorServices.getById(id, language)
  );

  return (
    <Wrapper>
      {!isLoading && !!item ? (
        <>
          <ActorDetailsHeader item={item} />
          <ActorDetailsBody id={id} />
        </>
      ) : (
        <Loader bg={colors.darkBlue} />
      )}
    </Wrapper>
  );
};

export default ActorDetails;
