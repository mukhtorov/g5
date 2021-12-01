import React from 'react';
import { sidebar } from '../../utils/sidebar';
import { Container, Item, Title } from './style';
import { NavLink } from 'react-router-dom';

export const Sidebar = (props) => {
  return (
    <Container>
      {sidebar.map(({ title, pathname, icon: Icon }) => (
        <NavLink
          to={pathname}
          style={({ isActive }) => {
            return {
              color: isActive ? 'white' : '#2d3a45',
              textDecoration: 'none',
              background: isActive ? '#FCB600' : 'white',
              display: 'flex',
              alignItems: 'center',
              height: '60px',
              marginBottom: '5px',
              padding: '0 40px',
              transition: 'all 0.3s ',
            };
          }}
        >
          <Item>
            <Icon className={'icon'} />
            <Title>{title}</Title>
          </Item>
        </NavLink>
      ))}

      <Item exit>
        {' '}
        <span className={'icon'}>icon</span> Chiqish
      </Item>
    </Container>
  );
};

export default Sidebar;
