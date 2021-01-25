import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { CountriesProps, PlaceContext } from '../../context/PlaceContext';
import { Container } from './styles';

interface CardProps {
  place: CountriesProps;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalDelete: React.FC<CardProps> = ({ place, setShowModal }) => {
  const context = useContext(PlaceContext);

  const handleCancelar = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    context?.handleDelete(place.id);
    toast.success('Registro deletado com sucesso!');
  };
  return (
    <Container>
      <h3>Deseja realmente excluir essa entrada?</h3>

      <div id="options">
        <button id="sim" onClick={handleDelete}>
          Sim
        </button>
        <button id="nao" onClick={handleCancelar}>
          Não
        </button>
      </div>
    </Container>
  );
};

export default ModalDelete;
