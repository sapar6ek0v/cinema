import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

import { useLanguageContext } from '../../../context/LanguageContext';
import HeaderDropDown from './HeaderDropDown';
import HeaderLink from './HeaderLink';
import { HeaderWrapper, HeaderGroup, SignUpBtn, LangBtn } from './styles';
import { navbarList } from './data';

const Header = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguageContext();

  // window.onscroll = function onScroll() {
  //   const header = document.querySelector('.header');

  //   if (window.pageYOffset > 100) {
  //     header.classList.add('header-fix');
  //   } else {
  //     header.classList.remove('header-fix');
  //   }
  // };

  const toggleLang = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
    changeLanguage(language === 'ru' ? 'en' : 'ru');
  };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderGroup position="space-between" gap={20}>
          <HeaderGroup gap={10}>
            {navbarList.slice(0, 5).map((link) => {
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
            {navbarList.slice(5).map((link) => (
              <HeaderLink key={link.id} title={link.title} path={link.path} />
            ))}

            <SignUpBtn aria-label="sig up button" type="button">
              {t('layout.header.signUp')}
            </SignUpBtn>
            <LangBtn onClick={toggleLang} aria-label="language change button" type="button">
              {language}
            </LangBtn>
          </HeaderGroup>
        </HeaderGroup>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
