import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DropDownLink } from '../styles';

const HeaderDropDownLink = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [type, setType] = useState('');
  //TODO:
  const handleNavigate = (path) => {
    if (location.pathname !== '/movies') {
      navigate(`/movies?type=${path}`);
    }
    setType(type);
  };

  return <DropDownLink onClick={() => handleNavigate(item.path)}>{item.title}</DropDownLink>;
};

export default HeaderDropDownLink;
