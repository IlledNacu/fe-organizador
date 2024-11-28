import React from 'react';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <MantineProvider>
      <AppRoutes />
    </MantineProvider>
  );
};

export default App;
