import React from 'react';
import { HeaderLinkBtn } from './styles';

const HeaderLink = ({ title, path }) => {
  return <HeaderLinkBtn to={`/${path}`}>{title}</HeaderLinkBtn>;
};

export default HeaderLink;
