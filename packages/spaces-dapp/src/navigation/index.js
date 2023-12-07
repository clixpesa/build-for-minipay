import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { DummyScreen, SpacesHomeScreen } from '../screens';

export const Navigation = () => {
  const config = {
  screens: {
    spacesHome: 'home',
    dummyScreen: 'dummy',
  },
};

const linking = {
  prefixes: ['http://localhost:19006/', 'localhost://'],
  config,
};
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
      initialRouteName="spacesHome"
        screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="dummyScreen" component={DummyScreen} />
        <Stack.Screen name="spacesHome" component={SpacesHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}