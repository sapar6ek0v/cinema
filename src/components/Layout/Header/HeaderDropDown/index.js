import React from 'react';
import HeaderDropDownLink from './HeaderDropDownLink';

import { DropDownWrapper, DropDownMenu, DropDownButton } from './styles';

const HeaderDropDown = ({ title, list }) => {
  return (
    <DropDownWrapper>
      <DropDownButton id="dropdown-basic">{title}</DropDownButton>

      <DropDownMenu>
        {list.map((item) => (
          <HeaderDropDownLink key={item.id} item={item} />
        ))}
      </DropDownMenu>
    </DropDownWrapper>
  );
};

export default HeaderDropDown;
