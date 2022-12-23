import React from 'react';
import { Link } from 'react-router-dom';
import { Container, DropdownButton } from 'react-bootstrap';
import HeaderDropDown from './HeaderDropDown';
import HeaderLink from './HeaderLink';
import { useLanguageContext } from '../../../context/LanguageContext';
import { HeaderWrapper, HeaderGroup } from './styles';

const Header = () => {
  const { language, setLanguage } = useLanguageContext();

  // window.onscroll = function onScroll() {
  //   const header = document.querySelector('.header');

  //   if (window.pageYOffset > 100) {
  //     header.classList.add('header-fix');
  //   } else {
  //     header.classList.remove('header-fix');
  //   }
  // };

  const changeLang = () => setLanguage(language === 'ru' ? 'en' : 'ru');

  return (
    <HeaderWrapper>
      <Container>
        <HeaderGroup position="space-between" gap={20}>
          <HeaderGroup gap={10}>
            <HeaderLink title="home" path={''} />
            <HeaderDropDown />
            <DropdownButton id="dropdown-basic-button" title="Serials">
              <Link to="tv-serials/popular?page=1" className="dropdown-link">
                Popular
              </Link>
              <Link to="tv-serials/on-the-air?page=1" className="dropdown-link">
                On the air
              </Link>
              <Link to="tv-serials/top-rated?page=1" className="dropdown-link">
                top rated
              </Link>
            </DropdownButton>
            <HeaderLink title="community" path={''} />
            <HeaderLink title="news" path={'/'} />
          </HeaderGroup>
          <HeaderGroup gap={10}>
            <HeaderLink title="help" path={''} />
            <HeaderLink title="login" path={''} />

            <button className="register-button">sign up</button>
            <button onClick={changeLang}>{language}</button>
          </HeaderGroup>
        </HeaderGroup>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
