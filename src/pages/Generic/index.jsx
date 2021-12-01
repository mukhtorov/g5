import React from 'react';
import { Container } from './style';
import { useLocation } from 'react-router-dom';

export const Generic = (props) => {
  const location = useLocation();
  console.log(location);
  return (
    <Container>
      <h1>{location.pathname} Coming Soon</h1>
    </Container>
  );
};

export default Generic;
