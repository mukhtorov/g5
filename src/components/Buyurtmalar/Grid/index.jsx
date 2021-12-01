import React, { useState } from 'react';
import { Container, Info, Wrapper } from './style';
import { card } from '../../../mock/card';

export const Mahsulotlar = ({ isActive }) => {
  const [products] = useState(Object.entries(card));
  let name = 'yangi';
  console.log(card[name]);
  return (
    <Container>
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
