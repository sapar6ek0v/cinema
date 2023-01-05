import React from 'react';
import { Dots, PaginationButton, ButtonsWrapper } from './styles';

const PaginationButtons = ({ page, togglePage }) => {
  return (
    <ButtonsWrapper>
      {page > 1 && <PaginationButton onClick={() => togglePage(1)}>{1}</PaginationButton>}
      {page >= 4 && <Dots>• • •</Dots>}
      {page >= 3 && <PaginationButton onClick={() => togglePage(page - 1)}>{page - 1}</PaginationButton>}
      <PaginationButton onClick={() => togglePage(page)}>{page}</PaginationButton>
      {page < 99 && <PaginationButton onClick={() => togglePage(page + 1)}>{page + 1}</PaginationButton>}
      {page < 98 && <Dots>• • •</Dots>}
      {page < 100 && <PaginationButton onClick={() => togglePage(100)}>{100}</PaginationButton>}
    </ButtonsWrapper>
  );
};

export default PaginationButtons;
