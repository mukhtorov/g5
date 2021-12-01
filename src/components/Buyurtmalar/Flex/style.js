import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
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
