import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import InputMask from 'react-input-mask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PlaceContext } from '../../context/PlaceContext';

interface ApiProps {
  name: string;
  translations: {
    pt: string;
  };
  flag: string;
}

const Menu: React.FC = () => {
  const [countries, SetCountries] = useState<ApiProps[]>([]);
  const [meta, setMeta] = useState('');
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const [svg, setSvg] = useState('');
  const context = useContext(PlaceContext);

  useEffect(() => {
    axios
      .get<ApiProps[]>('https://restcountries.eu/rest/v2/all', {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 5000
      })
      .then(response => {
        SetCountries(response.data);
      })
      .catch(ex => {
        console.log(ex);
      });
  }, []);

  const handleClick = () => {
    if (country.length === 0 || place.length === 0 || meta.length === 0) {
      toast.error('Preencha todos os campos corretamente!');
    } else if (meta.includes('_')) {
      toast.error('Preencha o campo Meta corretamente!');
    } else {
      context?.handlePost(country, place, meta, svg);
      toast.success('Local adicionado com sucesso!');
      setCountry('');
      setPlace('');
      setMeta('');
      setSvg('');
    }
  };

  const handleCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
    setSvg(
      countries[
        countries.findIndex(
          predicate => predicate.translations.pt === e.target.value
        )
      ].flag
    );
  };

  return (
    <Container>
      <div id="options">
        <div className="selectCountries">
          <label htmlFor="country">País</label>
          <select
            id="country"
            name="country"
            onChange={handleCountry}
            value={country}
          >
            <option value="" disabled>
              Selecione...
            </option>
            {countries.map(value => (
              <option key={value.translations.pt} value={value.translations.pt}>
                {value.translations.pt}
              </option>
            ))}
          </select>
        </div>

        <div className="selectPlaces">
          <label htmlFor="place">Local</label>
          <input
            id="place"
            name="place"
            type="text"
            placeholder="Digite o local que deseja conhecer"
            value={place}
            onChange={e => setPlace(e.target.value)}
          />
        </div>

        <div className="selectMeta">
          <label htmlFor="meta">Meta</label>
          <InputMask
            mask="99/9999"
            id="meta"
            name="meta"
            type="text"
            placeholder="mês/ano"
            value={meta}
            onChange={e => setMeta(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Adicionar</button>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default Menu;
