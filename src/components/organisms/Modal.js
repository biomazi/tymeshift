import React from 'react';
import Portal from './Portal';
import Backdrop from './Backdrop';
import styled from 'styled-components';

const ModalBodyWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2px;
  z-index: 1004;
  margin: auto;
  width: 440px;
  box-shadow: 0px 8px 16px -4px rgba(0, 17, 34, 0.2);
`;

const ModalButtonWrapper = styled.span`
  display: flex;
  justify-content: flex-end;
  margin: 0 25px 10px 0;
`;

const ModalButton = styled.button`
  color: rgb(255, 255, 255);
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0px;
  background-color: rgb(55, 178, 77);
  border-radius: 16px;
  cursor: pointer;
  height: 32px;
  width: 64px;
  border: none;
`;

const Modal = ({ children, toggle, isOpen }) => (
  <Portal>
    {isOpen && (
      <>
        <Backdrop clicked={toggle} show={isOpen}></Backdrop>
        <ModalBodyWrapper>
          {children}
          <ModalButtonWrapper>
            <ModalButton onClick={() => toggle(false)}>Done</ModalButton>
          </ModalButtonWrapper>
        </ModalBodyWrapper>
      </>
    )}
  </Portal>
);

export default Modal;
