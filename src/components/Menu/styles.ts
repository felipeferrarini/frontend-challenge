import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: var(--verde);
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media all and (max-width: 425px) {
    height: 100%;
    padding: 10px 0;
  }

  #options {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    @media all and (max-width: 1024px) {
      display: grid;
      grid-template-columns: 50% 50%;
    }

    @media all and (max-width: 425px) {
      display: flex;
      flex-direction: column;
      width: 80%;
      align-items: center;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0 10px;

      @media all and (max-width: 425px) {
        width: 100%;
      }

      select,
      input {
        height: 48px;
        background: #ffffff;
        border-radius: 7px;
        border: 2px solid transparent;
        transition: all 0.2s;
        padding-left: 10px;
        font: 400 16px Roboto, sans-serif;
        -webkit-box-shadow: 0px 1px 5px 1px rgba(50, 50, 50, 0.3);
        -moz-box-shadow: 0px 1px 5px 1px rgba(50, 50, 50, 0.3);
        box-shadow: 0px 1px 5px 1px rgba(50, 50, 50, 0.3);

        :focus,
        :hover {
          border: 2px solid var(--verde2);
        }
      }

      #country {
        width: 20vw;
      }

      #place {
        width: 25vw;
      }

      #meta {
        width: 10vw;
      }

      #meta,
      #place,
      #country {
        @media all and (max-width: 1024px) {
          width: 100%;
        }

        @media all and (max-width: 425px) {
          margin-bottom: 5px;
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
      background: var(--verde2);
      color: #fff;
      border-radius: 7px;
      transition: all 0.2s;
      font: 400 16px Roboto, sans-serif;
      border: 2px solid transparent;
      -webkit-box-shadow: 0px 1px 5px 1px rgba(50, 50, 50, 0.3);
      -moz-box-shadow: 0px 1px 5px 1px rgba(50, 50, 50, 0.3);
      box-shadow: 0px 1px 5px 1px rgba(50, 50, 50, 0.3);

      @media all and (max-width: 1024px) {
        width: calc(100% - 20px);
        margin-left: 10px;
      }

      @media all and (max-width: 425px) {
        width: 100%;
        margin-top: 5px;
        margin-left: 0;
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
