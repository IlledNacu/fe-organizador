import React from 'react';
import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <AppRoutes />
  );
};

export default App;

// MantineProvider provides a theme object context value, manages color scheme changes, and injects CSS variables. It must be rendered at the root of your application and should be used only once.