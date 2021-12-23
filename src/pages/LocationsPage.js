import Title from 'components/atoms/Title';
import AllLocations from 'components/organisms/AllLocations';
import Card from 'components/organisms/Card';
import ModalProvider from 'context/ModalProvider';
import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 96px;
  padding: 0 30px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const LocationsPage = () => {
  return (
    <ModalProvider>
      <Header>
        <Title variant="h3">All locations</Title>
        <Title>Acme locations</Title>
      </Header>
      <AllLocations />
      <Card />
    </ModalProvider>
  );
};

export default LocationsPage;
