import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';

import { Navigation } from './src/navigation';
import { theme } from './theme';
import { setProvider } from './src/config/provider';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    setProvider();
  }, []);
  return (
    <NativeBaseProvider theme={theme}>
      <Navigation />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
