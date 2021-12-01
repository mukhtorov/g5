import React, { useState } from 'react';
import { Container, Info, Navbar, Wrapper } from './style';
import { card } from '../../mock/card';

export const Mahsulotlar = (props) => {
  const [products] = useState(Object.entries(card));
  const [isActive, setIsActive] = useState('Yangi');
  let name = 'yangi';
  console.log(card[name]);
  return (
    <Container>
      <Navbar>
        <Navbar.Container>
          <Navbar.Item
            onClick={() => setIsActive('Yangi')}
            isActive={isActive === 'Yangi'}
          >
            Yangi
          </Navbar.Item>
          <Navbar.Item
            onClick={() => setIsActive('Qabul')}
            isActive={isActive === 'Qabul'}
          >
            Qabul Qilingan
          </Navbar.Item>
          <Navbar.Item
            onClick={() => setIsActive('Jonatilgan')}
            isActive={isActive === 'Jonatilgan'}
          >
            Jonatilgan
          </Navbar.Item>
          <Navbar.Item
            onClick={() => setIsActive('Yopilgan')}
            isActive={isActive === 'Yopilgan'}
          >
            Yopilgan
          </Navbar.Item>
        </Navbar.Container>
      </Navbar>
      <Wrapper>
        {products.map(([key, value], index) =>
          value
            .filter((a) => a.categoria.toLowerCase() === isActive.toLowerCase())
            .map((item) => (
              <Info>
                <h1>{item.categoria}</h1>
                <h1>{item.orderId}</h1>
              </Info>
            ))
        )}
      </Wrapper>
    </Container>
  );
};

export default Mahsulotlar;
