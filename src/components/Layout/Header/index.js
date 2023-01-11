import React from 'react';
import { Container } from 'react-bootstrap';

import HeaderListItem from './HeaderListItem';
import { HeaderWrapper } from './styles';

const Header = () => {
  // window.onscroll = function onScroll() {
  //   const header = document.querySelector('.header');

  //   if (window.pageYOffset > 100) {
  //     header.classList.add('header-fix');
  //   } else {
  //     header.classList.remove('header-fix');
  //   }
  // };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderListItem />
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
