import React, { useState } from 'react';
import { Container } from './styles';
import { MdEdit, MdCancel } from 'react-icons/md';
import { CountriesProps } from '../../context/PlaceContext';
import 'react-toastify/dist/ReactToastify.css';
import ModalEdit from '../ModalEdit';
import ModalDelete from '../ModalDelete';

interface CardProps {
  place: CountriesProps;
}
const SimpleCard: React.FC<CardProps> = ({ place }) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  return (
    <>
      <Container>
        <div id="head">
          <div id="country">
            <img src={place.svg} alt={place.country} />
            <span>{place.country}</span>
          </div>

          <div id="options">
            <button onClick={() => setShowModalEdit(true)}>
              <MdEdit />
            </button>

            <button onClick={() => setShowModalDelete(true)}>
              <MdCancel />
            </button>
          </div>
        </div>

        <div id="description">
          <span>Local: {place.place}</span>
          <span>Meta: {place.meta}</span>
        </div>
      </Container>

      {showModalEdit && (
        <ModalEdit setShowModal={setShowModalEdit} place={place} />
      )}
      {showModalDelete && (
        <ModalDelete setShowModal={setShowModalDelete} place={place} />
      )}
    </>
  );
};
export default SimpleCard;
