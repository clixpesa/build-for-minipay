import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { DummyScreen, SpacesLandingScreen, SpaceHomeScreen } from '../screens';

export const Navigation = () => {
  /*const config = {
  screens: {
    spacesHome: 'home',
    dummyScreen: 'dummy',
  },
};

const linking = {
  prefixes: ['http://localhost:19006/', 'localhost://'],
  config,
};linking={linking} fallback={<Text>Loading...</Text>}*/
  const hasSpaces = true;
  return (
    <NavigationContainer fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        initialRouteName={hasSpaces ? 'spaceHome' : 'spacesLanding'}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="dummyScreen" component={DummyScreen} />
        <Stack.Screen name="spacesLanding" component={SpacesLandingScreen} />
        <Stack.Screen name="spaceHome" component={SpaceHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
