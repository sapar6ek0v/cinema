import React from 'react';
import { useQuery } from 'react-query';
import { useLanguageContext } from '../../../../../context/LanguageContext';
import { KeyWordsServices } from '../../../../../helpers/services/keyWordsServices';
import { NoFoundTitle } from '../../../../styles';
import { KeyWordLink, KeyWordsWrapper } from './styles';

const KeyWords = ({ type, id }) => {
  const { language } = useLanguageContext();
  const { data: keyWords } = useQuery([`${type} keywords`, type, id, language], () =>
    KeyWordsServices.getKeyWordsById(type, id, language)
  );

  return (
    <>
      {!!keyWords?.length ? (
        <KeyWordsWrapper>
          {keyWords.map((keyword) => (
            <KeyWordLink to={'/'} key={keyword.id}>
              {keyword.name}
            </KeyWordLink>
          ))}
        </KeyWordsWrapper>
      ) : (
        <NoFoundTitle>No key words.</NoFoundTitle>
      )}
    </>
  );
};

export default KeyWords;
