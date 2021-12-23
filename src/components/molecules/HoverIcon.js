import React from 'react';
import styled from 'styled-components';
import { IconWrapper } from './Field';

const HoverdIcon = styled(IconWrapper)`
  opacity: 0.5;
`;

const HoverIconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HoverIcon = ({ icon, alt }) => (
  <HoverIconWrapper>
    <HoverdIcon src={icon} alt={alt} />
  </HoverIconWrapper>
);

export default HoverIcon;
