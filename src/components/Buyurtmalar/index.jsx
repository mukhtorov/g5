import React, { useState } from 'react';
import { Container, Icons, Navbar, Wrapper } from './style';
import Flex from './Flex';
import Grid from './Grid';

export const Buyurtmalar = (props) => {
  const [isActive, setIsActive] = useState('Yangi');
  const [isGrid, setGrid] = useState(false);
  const onChange = (title) => {
    isGrid && setIsActive(title);
  };
  return (
    <Container>
      <Navbar>
        <Navbar.Container isActive={isGrid}>
          <Navbar.Item
            onClick={() => onChange('Yangi')}
            isActive={isActive === 'Yangi'}
          >
            Yangi
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onChange('Qabul')}
            isActive={isActive === 'Qabul'}
          >
            Qabul Qilingan
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onChange('Jonatilgan')}
            isActive={isActive === 'Jonatilgan'}
          >
            Jonatilgan
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onChange('Yopilgan')}
            isActive={isActive === 'Yopilgan'}
          >
            Yopilgan
          </Navbar.Item>
        </Navbar.Container>
        <Wrapper>
          <Icons onClick={() => setGrid(false)} isactive={!isGrid}>
            <Icons.MenuH isactive={!isGrid} />
          </Icons>
          <Icons onClick={() => setGrid(true)} isactive={isGrid}>
            <Icons.MenuV isactive={isGrid} />
          </Icons>
        </Wrapper>
      </Navbar>
      {isGrid ? <Grid isActive={isActive} /> : <Flex isActive={isActive} />}
    </Container>
  );
};

export default Buyurtmalar;
