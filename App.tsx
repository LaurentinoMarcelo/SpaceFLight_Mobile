
import React from 'react';

import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components';

import { Provider as PaperProvider } from 'react-native-paper';

import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular
} from '@expo-google-fonts/roboto'

import theme from './src/global/styles/theme'

import { Routes } from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PaperProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </PaperProvider>
  );
}
