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

// MantineProvider provides a theme object context value, manages color scheme changes, and injects CSS variables. It must be rendered at the root of your application and should be used only once.