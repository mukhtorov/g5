import styled from 'styled-components';
import { ReactComponent as menuH } from '../../assets/icons/menuH.svg';
import { ReactComponent as menuV } from '../../assets/icons/menuV.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  background: #edeff3;
  border-radius: 24px;
  padding: 0 20px;
  margin-left: auto;
  margin-right: 50px;
`;

Wrapper.Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  margin: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  background: white;
  height: 300px;
`;

export const Navbar = styled.div`
  display: flex;
  height: 100px;
  background: white;
  align-items: center;
  justify-content: center;
`;

Navbar.Container = styled.div`
  display: flex;
  width: fit-content;
  padding: 20px 30px;
  align-items: center;
  justify-content: center;
  height: 48px;
  left: 558px;
  top: 16px;
  background: #edeff3;
  border-radius: 24px;
  opacity: ${({ isActive }) => (!isActive ? 0.3 : 1)};
  cursor: ${({ isActive }) => (!isActive ? 'not-allowed' : 'pointer')};
`;

Navbar.Item = styled.div`
  width: 162px;
  height: 36px;
  left: 563px;
  top: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ isActive }) => isActive && '#ffffff'};
  box-shadow: ${({ isActive }) =>
    isActive && '0px 2px 2px rgba(174, 176, 181, 0.314986)'};
  border-radius: 18px;
  margin-left: 10px;
  cursor: inherit;
  transition: all 0.5s ease-in-out;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: ${({ isactive }) => isactive && 'white'};
  padding: 11px;
  border-radius: 50%;
  margin: 15px;
  cursor: pointer;
`;

Icons.MenuH = styled(menuH)`
  width: 14px;
  height: 14px;
  fill: ${({ isactive }) => isactive && '#8d9ba8'};
`;

Icons.MenuV = styled(menuV)`
  width: 14px;
  height: 14px;
  fill: ${({ isactive }) => isactive && '#8d9ba8'};
`;
