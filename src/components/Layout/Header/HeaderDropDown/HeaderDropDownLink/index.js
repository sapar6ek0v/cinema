import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DropDownLink } from '../styles';

const HeaderDropDownLink = ({ item, onClose }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(`${path}`);
    onClose();
  };

  return <DropDownLink onClick={() => handleNavigate(item.path)}>{item.title}</DropDownLink>;
};

export default HeaderDropDownLink;
