import { useModalContext } from 'context/ModalProvider';
import React from 'react';
import styled from 'styled-components';
import Location from './Location';

const LocationsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 340px));
  grid-gap: 25px;
  justify-content: center;
  padding: 25px;
`;

const AllLocations = () => {
  const { data } = useModalContext();
  return (
    <LocationsWrapper>
      {data.map(location => (
        <Location key={location.id} {...location} />
      ))}
    </LocationsWrapper>
  );
};

export default AllLocations;
