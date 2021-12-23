import Text from 'components/atoms/Text';
import React from 'react';
import styled from 'styled-components';

const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconWrapper = styled.img`
  opacity: 0.3;
  width: 14px;
  height: 14px;
`;

const Field = ({ icon, alt, value }) => (
  <FieldWrapper>
    <IconWrapper src={icon} alt={alt} />
    <Text>
      {value} {alt || ''}
      {parseInt(value) !== 1 && alt && 's'}
    </Text>
  </FieldWrapper>
);

export default Field;
