import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-width: 300px;
  height: 100vh;
  padding: 55px 0;
  background: white;
  .icon {
    width: 40px;
    height: 40px;
    padding: 10px;
    background: #f6f6f6;
    margin-right: 10px;
    border-radius: 6px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ exit }) => exit && 'auto'};
`;

export const Title = styled.div`
  font-family: SFProDisplay;
  font-size: 18px;
  line-height: 18px;
  text-decoration: none;
  /* identical to box height */

  /* color: #2d3a45; */
`;
