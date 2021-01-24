import axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';

interface ContextProps {
  places?: CountriesProps[];
  handleDelete: (id: number) => void;
  handlePost: (
    country: string,
    place: string,
    meta: string,
    svg: string
  ) => void;
  handleEdit: (
    id: number,
    country: string,
    place: string,
    meta: string,
    svg: string
  ) => void;
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PlaceContext = createContext<ContextProps | undefined>(undefined);

export interface CountriesProps {
  id: number;
  country: string;
  place: string;
  meta: string;
  svg: string;
}

const PlaceProvider: React.FC = ({ children }) => {
  const [places, SetPlaces] = useState<CountriesProps[]>();
  const [refresh, setRefresh] = useState(false);

  const handleUpdateList = () => {
    axios
      .get<CountriesProps[]>('http://localhost:3004/places')
      .then(response => {
        if (response.data) {
          SetPlaces(response.data);
        }
      })
      .catch(ex => {
        console.log(ex);
      });
  };

  useEffect(() => {
    handleUpdateList();
  }, [refresh]);

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:3004/places/${id}`).catch(ex => {
      console.log(ex);
    });
    handleUpdateList();
    setRefresh(!refresh);
  };

  const handlePost = (
    country: string,
    place: string,
    meta: string,
    svg: string
  ) => {
    const data = {
      country,
      place,
      meta,
      svg
    };

    axios.post('http://localhost:3004/places', data);
    handleUpdateList();
    setRefresh(!refresh);
  };

  const handleEdit = (
    id: number,
    country: string,
    place: string,
    meta: string,
    svg: string
  ) => {
    const data = {
      country,
      place,
      meta,
      svg
    };

    axios.put(`http://localhost:3004/places/${id}`, data).catch(ex => {
      console.log(ex);
    });
    handleUpdateList();
    setRefresh(!refresh);
  };

  return (
    <PlaceContext.Provider
      value={{
        places,
        handleDelete,
        handlePost,
        handleEdit,
        refresh,
        setRefresh
      }}
    >
      {children}
    </PlaceContext.Provider>
  );
};

export default PlaceProvider;
