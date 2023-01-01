import React from 'react';
import { ButtonGroup, FilterButton } from './styles';

const FilterButtons = ({ types, handleChangeType, currentType }) => {
  const deleteBottomHyphen = (str) =>
    str
      .split('_')
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join(' ');

  return (
    <ButtonGroup>
      {types.map((item, idx) => (
        <FilterButton key={item + idx} onClick={() => handleChangeType(item)} active={currentType === item}>
          {deleteBottomHyphen(item)}
        </FilterButton>
      ))}
    </ButtonGroup>
  );
};

export default FilterButtons;
