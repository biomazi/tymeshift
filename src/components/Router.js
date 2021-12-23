import ErrorPage from 'pages/ErrorPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LocationsPage from 'pages/LocationsPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LocationsPage />}>
        <Route path="all-locations" index element={<LocationsPage />} />
        <Route path="inv" element={<div>2</div>} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
