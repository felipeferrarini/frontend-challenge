import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  justify-content: center;
  overflow: hidden auto;
  padding: 50px;
  padding-left: auto;
  position: relative;

  @media all and (max-width: 1600px) {
    grid-template-columns: auto auto auto auto auto;
  }

  @media all and (max-width: 1400px) {
    grid-template-columns: auto auto auto auto;
  }

  @media all and (max-width: 1100px) {
    grid-template-columns: auto auto auto;
  }

  @media all and (max-width: 820px) {
    grid-template-columns: auto auto;
  }

  @media all and (max-width: 570px) {
    grid-template-columns: auto;
  }
`;
