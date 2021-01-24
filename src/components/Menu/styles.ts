import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: var(--verde);
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media all and (max-width: 1024px) {
  }

  #options {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    @media all and (max-width: 1024px) {
      /* flex-direction: column;
      width: 100%;
      align-items: flex-start; */
      display: grid;
      grid-template-columns: 50% 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0 10px;

      select,
      input {
        height: 48px;
        background: #ffffff;
        border-radius: 7px;
        border: 2px solid transparent;
        transition: all 0.2s;
        padding-left: 10px;
        font: 400 16px Roboto, sans-serif;

        :focus,
        :hover {
          border: 2px solid var(--verde2);
        }
      }

      #country {
        width: 20vw;

        @media all and (max-width: 1024px) {
          width: 100%;
        }
      }

      #place {
        width: 25vw;
        @media all and (max-width: 1024px) {
          width: 100%;
        }
      }

      #meta {
        width: 10vw;
        @media all and (max-width: 1024px) {
          width: 100%;
        }
      }

      label {
        margin-bottom: 2px;
        margin-left: 2px;
      }
    }

    button {
      cursor: pointer;
      height: 48px;
      width: 10vw;
      margin: 0 10px;
      background: var(--verde2);
      color: #fff;
      border-radius: 7px;
      transition: all 0.2s;
      font: 400 16px Roboto, sans-serif;
      border: 2px solid transparent;

      @media all and (max-width: 1024px) {
        width: 90%;
      }

      :hover {
        background-color: var(--verdeActive);
      }

      :active {
        background-color: #fff;
        border: 2px solid var(--verde2);
        color: var(--verde2);
      }
    }
  }
`;
