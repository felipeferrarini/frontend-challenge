import React, { useContext } from 'react';
import { PlaceContext } from '../../context/PlaceContext';
import SimpleCard from '../SimpleCard';
import { Container } from './styles';

const Board: React.FC = () => {
  const context = useContext(PlaceContext);

  return (
    <Container>
      {context?.places?.length === 0 && (
        <h2>Parece que você ainda não adicionou nenhum local...</h2>
      )}
      {context?.places?.map(place => (
        <SimpleCard place={place} key={place.id} />
      ))}
    </Container>
  );
};

export default Board;
