import React, { useState } from 'react';
import { Container, Info, Wrapper } from './style';

// import { card } from '../../../mock';
import { card } from '../../../mock/card';

export const Buyurtmalar = (props) => {
  const [products, setProducts] = useState(Object.entries(card));
  let name = 'yangi';
  console.log(card[name]);
  return (
    <Container>
      <h1> Buyurtmalar Navbar</h1>
      <Wrapper>
        {products.map(([name, data]) => (
          <Wrapper.Column>
            <h1>{name}</h1>
            {data.map((value) => (
              <Info>
                <h2>{value.user.name}</h2>
                <h3>{value.user.phone}</h3>
              </Info>
            ))}
          </Wrapper.Column>
        ))}
        {/* <Wrapper.Column></Wrapper.Column>
        <Wrapper.Column>Qabul qilingan</Wrapper.Column>
        <Wrapper.Column>Jonatilgan</Wrapper.Column>
        <Wrapper.Column>Yopilgan</Wrapper.Column> */}
      </Wrapper>
    </Container>
  );
};

export default Buyurtmalar;
