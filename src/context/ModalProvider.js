import useAxios from 'axios-hooks';
import useToggle from 'hooks/useToggle';
import React, { createContext, useContext, useState } from 'react';
import { API_ENDPOINT } from 'services/api.constants';

const ModalContext = createContext({});

const ModalProvider = ({ children, value }) => {
  const [modalData, setModalData] = useState({});
  const [{ data, loading, error }] = useAxios(API_ENDPOINT);
  const { isOpen, toggle } = useToggle();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <ModalContext.Provider value={{ isOpen, toggle, data, modalData, setModalData, ...value }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);

export default ModalProvider;
