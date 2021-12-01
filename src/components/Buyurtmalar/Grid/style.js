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
