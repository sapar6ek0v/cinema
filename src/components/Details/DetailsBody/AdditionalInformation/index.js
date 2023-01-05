import React from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { useLanguageContext } from '../../../../context/LanguageContext';
import { getImage } from '../../../../helpers/getImage';
import { MovieServices } from '../../../../helpers/services/movieServices';
import KeyWords from './KeyWords';
import { AdditionalInformationWrapper, TitleStack, Title, Stack, Description, Image } from './styles';

const AdditionalInformation = ({ type, id }) => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const { data: item } = useQuery([`${type} additional information`, type, id, language], () =>
    MovieServices.getById(type, id, language)
  );

  return (
    <AdditionalInformationWrapper>
      {!!item ? (
        <Stack>
          <TitleStack>
            <Title>{t('details.originalName')}</Title>
            <Description>{item.original_title || item.original_name || '-'}</Description>
          </TitleStack>
          <TitleStack>
            <Title>{t('details.status')}</Title>
            <Description>{item.status || '-'}</Description>
          </TitleStack>
          {type === 'movie' ? (
            <>
              <TitleStack>
                <Title>{t('details.budget')}</Title>
                <Description>${item.budget.toLocaleString('en') || '-'}</Description>
              </TitleStack>

              <TitleStack>
                <Title>{t('details.revenue')}</Title>
                <Description>${item.revenue.toLocaleString('en') || '-'}</Description>
              </TitleStack>
            </>
          ) : (
            <>
              <TitleStack>
                <Title>{t('details.networks')}</Title>
                {item.networks.map((network) => (
                  <Image key={network.id} src={getImage(network.logo_path, 'h30')} alt={network.name} />
                ))}
              </TitleStack>
              <TitleStack>
                <Title>{t('details.type')}</Title>
                <Description>{item.type || '-'}</Description>
              </TitleStack>
              <TitleStack>
                <Title>{t('details.originalLanguage')}</Title>
                <Description>{item.original_language || '-'}</Description>
              </TitleStack>
            </>
          )}

          <TitleStack>
            <Title>{t('details.keywords')}</Title>
            <KeyWords id={id} type={type} />
          </TitleStack>
        </Stack>
      ) : null}
    </AdditionalInformationWrapper>
  );
};

export default AdditionalInformation;
