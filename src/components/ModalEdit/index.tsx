import React, { useContext, useState } from 'react';
import { CountriesProps, PlaceContext } from '../../context/PlaceContext';
import InputMask from 'react-input-mask';
import { Container } from './styles';
import { toast } from 'react-toastify';

interface CardProps {
  place: CountriesProps;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalEdit: React.FC<CardProps> = ({ place, setShowModal }) => {
  const [meta, setMeta] = useState(place.meta);
  const [local, setLocal] = useState(place.place);
  const context = useContext(PlaceContext);

  const handleCancelar = () => {
    setShowModal(false);
    setMeta(place.meta);
    setLocal(place.place);
  };

  const handleSalvar = () => {
    if (meta.length === 0 || local.length === 0) {
      toast.error('Preencha todos os campos corretamente!');
    } else if (meta.includes('_')) {
      toast.error('Preencha o campo Meta corretamente!');
    } else {
      context?.handleEdit(place.id, place.country, local, meta, place.svg);
      toast.success('O local foi alterado com sucesso!');
      setShowModal(false);
    }
  };
  return (
    <Container>
      <h2>Editar Local</h2>
      <h4>País: {place.country}</h4>
      <div id="edit">
        <div>
          <label htmlFor="local">Local</label>
          <input
            id="local"
            name="local"
            type="text"
            value={local}
            onChange={e => setLocal(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="data">Meta</label>
          <InputMask
            mask="99/9999"
            id="data"
            name="data"
            type="text"
            placeholder="mês/ano"
            value={meta}
            onChange={e => setMeta(e.target.value)}
          />
        </div>
      </div>

      <div id="options">
        <button id="salvar" onClick={handleSalvar}>
          Salvar
        </button>
        <button id="cancelar" onClick={handleCancelar}>
          Cancelar
        </button>
      </div>
    </Container>
  );
};

export default ModalEdit;
