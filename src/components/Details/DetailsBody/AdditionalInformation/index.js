import React from 'react';
import { useQuery } from 'react-query';

import { useLanguageContext } from '../../../../context/LanguageContext';
import { getImage } from '../../../../helpers/getImage';
import { MovieServices } from '../../../../helpers/services/movieServices';
import KeyWords from './KeyWords';
import { AdditionalInformationWrapper, TitleStack, Title, Stack, Description, Image } from './styles';

const AdditionalInformation = ({ type, id }) => {
  const { language } = useLanguageContext();
  const { data: item } = useQuery(`${type} additional information`, () =>
    MovieServices.getById(type, id, language)
  );

  return (
    <AdditionalInformationWrapper>
      {!!item ? (
        <Stack>
          <TitleStack>
            <Title>Original name</Title>
            <Description>{item.original_title || item.original_name || '-'}</Description>
          </TitleStack>
          <TitleStack>
            <Title>Status</Title>
            <Description>{item.status || '-'}</Description>
          </TitleStack>
          {type === 'movie' ? (
            <>
              <TitleStack>
                <Title>Budget</Title>
                <Description>${item.budget.toLocaleString('en') || '-'}</Description>
              </TitleStack>

              <TitleStack>
                <Title>Revenue</Title>
                <Description>${item.revenue.toLocaleString('en') || '-'}</Description>
              </TitleStack>
            </>
          ) : (
            <>
              <TitleStack>
                <Title>Networks</Title>
                {item.networks.map((network) => (
                  <Image key={network.id} src={getImage(network.logo_path, 'h30')} alt={network.name} />
                ))}
              </TitleStack>
              <TitleStack>
                <Title>Type</Title>
                <Description>{item.type || '-'}</Description>
              </TitleStack>
              <TitleStack>
                <Title>Original Language</Title>
                <Description>{item.original_language || '-'}</Description>
              </TitleStack>
            </>
          )}

          <TitleStack>
            <Title>Keywords</Title>
            <KeyWords id={id} type={type} />
          </TitleStack>
        </Stack>
      ) : null}
    </AdditionalInformationWrapper>
  );
};

export default AdditionalInformation;
