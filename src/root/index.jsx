import React from 'react';
import { Container, Wrapper } from './style';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { sidebar } from '../utils/sidebar';
import Sidebar from '../components/Sidebar';

export const Root = () => {
  return (
    <Container>
      <Router>
        <Sidebar />
        <Wrapper>
          <Routes>
            {sidebar.map(({ id, pathname, component: Element }) => (
              <Route key={id} path={pathname} element={<Element />} />
            ))}
            <Route path='*' element={<h1>404 not found</h1>} />
          </Routes>
        </Wrapper>
      </Router>
    </Container>
  );
};

export default Root;
