import React from 'react';

import { AddressProvider } from './address';

const AppProvider: React.FC = ({ children }) => (
  <AddressProvider>{children}</AddressProvider>
);

export default AppProvider;
