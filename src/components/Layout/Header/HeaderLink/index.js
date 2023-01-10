import React from 'react';

import { HeaderLinkBtn } from './styles';

const HeaderLink = ({ title, path, onClose }) => {
  return (
    <HeaderLinkBtn to={`${path}`} onClick={onClose}>
      {title}
    </HeaderLinkBtn>
  );
};

export default HeaderLink;
