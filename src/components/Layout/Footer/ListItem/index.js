import React from 'react';
import { Stack, Title } from '../styles';
import { footerList } from '../data';
import { List, LinkItem } from './styles';

const ListItem = () => {
  return (
    <>
      {footerList.map((item) => (
        <Stack key={item.id}>
          <Title>{item.title}</Title>
          <List>
            {item.links.map((link) => (
              <LinkItem to={link.path} key={link.id}>
                {link.title}
              </LinkItem>
            ))}
          </List>
        </Stack>
      ))}
    </>
  );
};

export default ListItem;
