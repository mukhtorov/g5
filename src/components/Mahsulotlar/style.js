import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 100%;
  margin: 10px 0;
  background: white;
  padding: 20px 50px;
  height: fit-content;
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
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;
