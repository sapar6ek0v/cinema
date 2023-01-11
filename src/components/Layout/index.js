import React from 'react';

import Footer from './Footer';
import Header from './Header';
import { LayoutWrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
