import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Lugares que quero conhecer" />
    </Container>
  );
};

export default Header;
