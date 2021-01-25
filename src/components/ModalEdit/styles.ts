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
  width: min(95vw, 600px);
  top: 20vh;
  left: calc(50vw - min(47.5vw, 300px));
  transition: all 0.3s;
  animation: fadeInEdit 0.2s;
  transform-style: preserve-3d;
  border-radius: 5px;
  padding: 30px;

  @keyframes fadeInEdit {
    from {
      top: 100vh;
    }
    to {
      top: 20vh;
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

    @keyframes fadeIn2 {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  h2 {
    color: var(--verde2);
    border-bottom: 2px solid #ababab;
    width: 100%;
    margin-bottom: 5px;
  }

  h4 {
    font-size: 16px;
    width: 100%;
    margin: 5px 2px;
  }

  #edit {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 10px 0;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      margin-bottom: 10px;

      input {
        height: 48px;
        background: #fff;
        border-radius: 7px;
        border: 2px solid #ababab;
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
        margin-left: 5px;
        margin-bottom: 2px;
      }
    }
  }

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

  #cancelar {
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
`;
