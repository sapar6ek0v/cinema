import React from 'react';
import { useLocation } from 'react-router-dom';

import { HeaderLinkBtn } from './styles';

const HeaderLink = ({ title, path, onClose }) => {
  const location = useLocation();

  return (
    <HeaderLinkBtn to={`${path}`} onClick={onClose} active={location.pathname === path}>
      {title}
    </HeaderLinkBtn>
  );
};

export default HeaderLink;
