import React from 'react';

import { DropDownWrapper, DropDownLink, DropDownMenu, DropDownButton } from './styles';

const HeaderDropDown = ({ title, list }) => {
  return (
    <DropDownWrapper>
      <DropDownButton id="dropdown-basic">{title}</DropDownButton>

      <DropDownMenu>
        {list.map((item) => (
          <DropDownLink key={item.id} to={item.path}>
            {item.title}
          </DropDownLink>
        ))}
      </DropDownMenu>
    </DropDownWrapper>
  );
};

export default HeaderDropDown;
