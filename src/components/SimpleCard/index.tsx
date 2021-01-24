import React, { useContext, useState } from 'react';
import { Container, ModalContainer } from './styles';
import { MdEdit, MdCancel } from 'react-icons/md';
import { CountriesProps, PlaceContext } from '../../context/PlaceContext';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CardProps {
  place: CountriesProps;
}
const SimpleCard: React.FC<CardProps> = ({ place }) => {
  const [meta, setMeta] = useState(place.meta);
  const [local, setLocal] = useState(place.place);
  const [showModal, setShowModal] = useState(false);
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
    <>
      <Container>
        <div id="head">
          <div id="country">
            <img src={place.svg} alt={place.country} />
            <span>{place.country}</span>
          </div>

          <div id="options">
            <button onClick={() => setShowModal(true)}>
              <MdEdit />
            </button>

            <button onClick={() => context?.handleDelete(place.id)}>
              <MdCancel />
            </button>
          </div>
        </div>

        <div id="description">
          <span>Local: {place.place}</span>
          <span>Meta: {place.meta}</span>
        </div>
      </Container>

      {showModal && (
        <ModalContainer>
          <h2>Editar Local</h2>

          <div id="country">
            <img src={place.svg} alt={place.country} />
            <span>{place.country}</span>
          </div>

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
        </ModalContainer>
      )}
    </>
  );
};
export default SimpleCard;
