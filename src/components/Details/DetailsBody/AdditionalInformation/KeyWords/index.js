import React from 'react';
import { useQuery } from 'react-query';
import { useLanguageContext } from '../../../../../context/LanguageContext';
import { KeyWordsServices } from '../../../../../helpers/services/keyWordsServices';
import { KeyWordLink, KeyWordsWrapper } from './styles';

const KeyWords = ({ type, id }) => {
  const { language } = useLanguageContext();
  const { data: keyWords } = useQuery([`${type} keywords`, type, id, language], () =>
    KeyWordsServices.getKeyWordsById(type, id, language)
  );

  return (
    <KeyWordsWrapper>
      {!!keyWords
        ? keyWords.map((keyword) => (
            <KeyWordLink to={'/'} key={keyword.id}>
              {keyword.name}
            </KeyWordLink>
          ))
        : null}
    </KeyWordsWrapper>
  );
};

export default KeyWords;
