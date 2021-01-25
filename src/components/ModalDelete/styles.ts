import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  -webkit-box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
  box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 300px;
  top: 30vh;
  left: calc(50vw - 150px);
  transition: all 0.3s;
  animation: fadeInDelete 0.2s;
  transform-style: preserve-3d;
  border-radius: 5px;
  padding: 50px;

  @keyframes fadeInDelete {
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
    background-color: rgba(0, 0, 0, 0.7);
    transform: translateZ(-1px);
    transition: all 0.3s;
    animation: fadeIn2 0.3s;
  }

  h3 {
    color: #000;
    margin-bottom: 15px;
    text-align: center;
    width: 100%;
  }

  #options {
    display: flex;
    flex-direction: row;

    button {
      cursor: pointer;
      height: 40px;
      width: 100px;
      margin: 0 10px;
      background: var(--verde2);
      color: #fff;
      border-radius: 7px;
      transition: all 0.2s;
      font: 400 16px Roboto, sans-serif;
      border: 2px solid transparent;
      -webkit-box-shadow: 0px 1px 5px 1px rgba(50, 50, 50, 0.3);
      -moz-box-shadow: 0px 1px 5px 1px rgba(50, 50, 50, 0.3);
      box-shadow: 0px 1px 5px 1px rgba(50, 50, 50, 0.3);

      :hover {
        background-color: var(--verdeActive);
      }

      :active {
        background-color: #fff;
        border: 2px solid var(--verde2);
        color: var(--verde2);
      }
    }

    #sim {
      background: rgba(200, 0, 0);

      :hover {
        background-color: red;
      }

      :active {
        background-color: #fff;
        border: 2px solid rgba(200, 0, 0);
        color: rgba(200, 0, 0);
      }
    }
  }
`;
