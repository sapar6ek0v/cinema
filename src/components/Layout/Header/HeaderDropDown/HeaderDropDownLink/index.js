import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DropDownLink } from '../styles';

const HeaderDropDownLink = ({ item }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => navigate(`${path}`);

  return <DropDownLink onClick={() => handleNavigate(item.path)}>{item.title}</DropDownLink>;
};

export default HeaderDropDownLink;
