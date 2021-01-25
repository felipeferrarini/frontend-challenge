import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 250px;
  background: #fff;
  border-radius: 10px;
  margin: 15px;
  padding: 20px 10px;
  -webkit-box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.3);

  @media all and (max-width: 1024px) {
    height: 200px;
  }

  @media all and (max-width: 425px) {
    width: 80vw;
    margin: 15px 0;
  }

  img {
    width: 56px;
    height: 34px;
    margin-bottom: 10px;
  }

  #head {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 5px 5px;
    border-bottom: 1px solid #ababab;

    #country {
      display: flex;
      flex-direction: column;

      span {
        font-weight: bold;
        color: var(--verde);
      }
    }

    button {
      width: 30px;
      height: 30px;
      padding: 0;
      font-size: 21px;
      color: #ababab;
      border: none;
      background-color: transparent;
      margin-left: 5px;
      cursor: pointer;

      :hover {
        color: #000;
      }
    }
  }

  #description {
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    font-weight: 400;

    span {
      margin-bottom: 10px;
    }
  }
`;
