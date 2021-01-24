import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --verde: #4F9419;
    --verde2: #006C18;
    --verdeActive: #04d361;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%auto;
    font: 400 16px Roboto, sans-serif;
    overflow: hidden auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      width: 13px;
    }

    ::-webkit-scrollbar-thumb {
      background: #fff;
      -webkit-box-shadow: 0px 0px 3px 0px rgba(50, 50, 50, 0.4);
      -moz-box-shadow: 0px 0px 3px 0px rgba(50, 50, 50, 0.4);
      box-shadow: 0px 0px 3px 0px rgba(50, 50, 50, 0.4);


      :hover{
        background: #f7f0ff;
      }

      :active{
        background: #d5d0db;
      }
    }
    ::-webkit-scrollbar-track {

      background: #aaaa;
      -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
      box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
    }
  }

  body {
    background-color: #fff;
  }

`;
