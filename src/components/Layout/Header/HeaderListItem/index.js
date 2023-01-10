import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { useLanguageContext } from '../../../../context/LanguageContext';
import HeaderDropDown from '../HeaderDropDown';
import HeaderLink from '../HeaderLink';
import { useListItem } from '../hooks/useListItem';
import { BurgerBar, BurgerMenu, Menu, HeaderGroup, LangBtn, SignUpBtn } from './styles';

const HeaderListItem = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguageContext();
  const listItem = useListItem();
  const matches = useMediaQuery('(min-width: 992px)');

  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const toggleLang = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
    changeLanguage(language === 'ru' ? 'en' : 'ru');
  };

  useEffect(() => {
    if (!!matches) {
      setIsMenuClicked(false);
    }
  }, [matches]);

  return (
    <>
      <HeaderGroup position="space-between">
        {!!listItem ? (
          <>
            <HeaderGroup>
              {!!matches ? (
                listItem
                  .slice(0, 5)
                  .map((link) => (
                    <>
                      {link.submenu?.length ? (
                        <HeaderDropDown key={link.id} title={link.title} list={link.submenu} />
                      ) : (
                        <HeaderLink key={link.id} title={link.title} path={link.path} />
                      )}
                    </>
                  ))
              ) : (
                <BurgerMenu onClick={() => setIsMenuClicked(!isMenuClicked)}>
                  <BurgerBar clicked={isMenuClicked} />
                  <BurgerBar clicked={isMenuClicked} />
                  <BurgerBar clicked={isMenuClicked} />
                </BurgerMenu>
              )}
            </HeaderGroup>
            <HeaderGroup>
              {!!matches
                ? listItem
                    .slice(5)
                    .map((link) => <HeaderLink key={link.id} title={link.title} path={link.path} />)
                : null}

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

      <Menu open={isMenuClicked}>
        {!!listItem
          ? listItem.map((link) => {
              return (
                <>
                  {link.submenu?.length ? (
                    <HeaderDropDown
                      key={link.id}
                      title={link.title}
                      list={link.submenu}
                      onClose={() => setIsMenuClicked(false)}
                    />
                  ) : (
                    <HeaderLink
                      key={link.id}
                      title={link.title}
                      path={link.path}
                      onClose={() => setIsMenuClicked(false)}
                    />
                  )}
                </>
              );
            })
          : null}
      </Menu>
    </>
  );
};

export default HeaderListItem;
