import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './routes';
import {theme} from '~/theme';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="default" backgroundColor="#000" />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </NavigationContainer>
);

export {App};
