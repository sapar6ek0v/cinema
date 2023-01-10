import React from 'react';
import HeaderDropDownLink from './HeaderDropDownLink';

import { DropDownWrapper, DropDownMenu, DropDownButton } from './styles';

const HeaderDropDown = ({ title, list, onClose }) => {
  return (
    <DropDownWrapper>
      <DropDownButton id="dropdown-basic">{title}</DropDownButton>

      <DropDownMenu>
        {list.map((item) => (
          <HeaderDropDownLink key={item.id} item={item} onClose={onClose} />
        ))}
      </DropDownMenu>
    </DropDownWrapper>
  );
};

export default HeaderDropDown;
