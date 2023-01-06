import React from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

import { useLanguageContext } from '../../../../context/LanguageContext';
import HeaderDropDown from '../HeaderDropDown';
import HeaderLink from '../HeaderLink';
import { useListItem } from '../hooks/useListItem';
import { HeaderGroup, LangBtn, SignUpBtn } from './styles';

const HeaderListItem = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguageContext();
  const listItem = useListItem();

  const toggleLang = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
    changeLanguage(language === 'ru' ? 'en' : 'ru');
  };

  return (
    <HeaderGroup position="space-between" gap={20}>
      {!!listItem ? (
        <>
          <HeaderGroup gap={10}>
            {listItem.slice(0, 5).map((link) => {
              return (
                <>
                  {link.submenu?.length ? (
                    <HeaderDropDown key={link.id} title={link.title} list={link.submenu} />
                  ) : (
                    <HeaderLink key={link.id} title={link.title} path={link.path} />
                  )}
                </>
              );
            })}
          </HeaderGroup>
          <HeaderGroup gap={10}>
            {listItem.slice(5).map((link) => (
              <HeaderLink key={link.id} title={link.title} path={link.path} />
            ))}

            <SignUpBtn aria-label="sig up button" type="button">
              {t('layout.header.signUp')}
            </SignUpBtn>
            <LangBtn onClick={toggleLang} aria-label="language change button" type="button">
              {language}
            </LangBtn>
          </HeaderGroup>
        </>
      ) : null}
    </HeaderGroup>
  );
};

export default HeaderListItem;
