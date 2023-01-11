import React from 'react';
import { Container } from 'react-bootstrap';

import Card from './Card';
import FilterButtons from './FilterButtons';
import PaginationButtons from './PaginationButtons';
import { ButtonGroup, Grid, Stack, Wrapper } from './styles';

const PageWithPagination = ({ list, types, currentType, page, togglePage, linkPath, handleChangeType }) => {
  return (
    <Wrapper>
      <Container>
        <Stack>
          <ButtonGroup>
            <FilterButtons types={types} currentType={currentType} handleChangeType={handleChangeType} />

            <PaginationButtons page={page} togglePage={togglePage} />
          </ButtonGroup>

          <Grid>
            {list.map((item) => (
              <Card key={item.id} item={item} linkPath={linkPath} />
            ))}
          </Grid>

          <ButtonGroup>
            <PaginationButtons page={page} togglePage={togglePage} />
          </ButtonGroup>
        </Stack>
      </Container>
    </Wrapper>
  );
};

export default PageWithPagination;
