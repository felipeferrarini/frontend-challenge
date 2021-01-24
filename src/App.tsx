import React from 'react';
import Board from './components/Board';
import Header from './components/Header';
import Menu from './components/Menu';
import GlobalStyle from './styles/global';
import PlaceProvider from './context/PlaceContext';

const App: React.FC = () => {
  return (
    <PlaceProvider>
      <Header />
      <Menu />
      <Board />
      <GlobalStyle />
    </PlaceProvider>
  );
};

export default App;
