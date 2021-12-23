import { useModalContext } from 'context/ModalProvider';
import React from 'react';
import Location from './Location';
import Modal from './Modal';

const Card = () => {
  const { isOpen, toggle, modalData } = useModalContext();
  return (
    <Modal toggle={toggle} isOpen={isOpen}>
      <Location {...modalData} isModal />
    </Modal>
  );
};

export default Card;
