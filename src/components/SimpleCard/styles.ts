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

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  -webkit-box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
  box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
  position: fixed;
  width: max(35vw, 300px);
  top: 30vh;
  left: calc(50vw - max(17.5vw, 150px));
  transition: all 0.3s;
  animation: fadeIn 0.2s;
  transform-style: preserve-3d;
  border-radius: 5px;
  padding: 50px;

  @keyframes fadeIn {
    from {
      top: 100vh;
    }
    to {
      top: 30vh;
    }
  }

  ::before {
    content: '';
    position: absolute;
    width: 150vw;
    height: 500vh;
    background-color: rgba(0, 0, 0, 0.5);
    transform: translateZ(-1px);
    transition: all 0.3s;
  }

  h2 {
    color: var(--verde2);
    border-bottom: 2px solid #ababab;
    text-align: center;
    width: 100%;
  }

  #country {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-top: 20px;
    font-size: 17px;
    font-weight: bold;

    img {
      width: 56px;
      height: 34px;
      margin-right: 10px;
    }
  }

  #edit {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 30px 0;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      margin-bottom: 20px;

      input {
        height: 48px;
        background: #ababab50;
        border-radius: 7px;
        border: 2px solid transparent;
        transition: all 0.2s;
        padding-left: 10px;
        font: 400 16px Roboto, sans-serif;
        width: 100%;

        :focus,
        :hover {
          border: 2px solid var(--verde2);
        }
      }

      label {
        margin-right: 10px;
      }
    }
  }

  button {
    cursor: pointer;
    height: 48px;
    width: 203px;
    margin: 0 10px;
    background: var(--verde2);
    color: #fff;
    border-radius: 7px;
    transition: all 0.2s;
    padding-left: 10px;
    font: 400 16px Roboto, sans-serif;
    border: 2px solid transparent;

    :hover {
      background-color: var(--verdeActive);
    }

    :active {
      background-color: #fff;
      border: 2px solid var(--verde2);
      color: var(--verde2);
    }
  }
`;
