import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { DummyScreen, SpacesLandingScreen, SpaceHomeScreen, CreateSpaceScreen } from '../screens';

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
  const hasSpaces = false;
  return (
    <NavigationContainer fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        initialRouteName={hasSpaces ? 'spaceHome' : 'createSpace'}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="dummyScreen" component={DummyScreen} />
        <Stack.Screen name="createSpace" component={CreateSpaceScreen} />
        <Stack.Screen name="spacesLanding" component={SpacesLandingScreen} />
        <Stack.Screen name="spaceHome" component={SpaceHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
