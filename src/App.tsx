import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from '~/theme';
import { Routes } from './navigation/Routes';
import { AppProvider } from './hooks';

const App: React.FC = () => (
  <AppProvider>
    <StatusBar barStyle="default" backgroundColor="#000" />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </AppProvider>
);

export { App };
