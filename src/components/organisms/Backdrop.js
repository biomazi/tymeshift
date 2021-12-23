import React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1001;
  left: 0;
  top: 0;
  background-color: rgba(0, 17, 34, 0.6);

  @media (max-width: 767px) {
    background-color: transparent;
  }
`;

const Backdrop = ({ show, clicked }) => (show ? <StyledBackdrop onClick={() => clicked(false)} /> : null);

export default Backdrop;
