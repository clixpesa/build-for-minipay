import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {
  DummyScreen,
  SpacesLandingScreen,
  SpaceHomeScreen,
  CreateSpaceScreen,
  SelectContactsScreen,
  SetSpaceGoalScreen,
  JoinSpaceScreen,
  FundSpaceScreen,
  ManageSpaceScreen,
} from '../screens';

import { useSelector } from 'react-redux';

export const Navigation = () => {
  const config = {
    screens: {
      spaceHome: 'home',
      spacesLanding: 'get-started',
      createSpace: 'create',
      joinSpace: 'join',
      selectContacts: 'select-contacts',
      setSpaceGoal: 'set-goal',
      fundSpace: 'fund',
      manageSpace: 'manage',
      dummyScreen: 'dummy',
    },
  };

  const linking = {
    prefixes: ['http://localhost:19006/', 'localhost://'],
    config,
  };
  const hasSpaces = useSelector((s) => s.spaces.userSpaces.hasSpaces);
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        initialRouteName={hasSpaces ? 'spaceHome' : 'spacesLanding'}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="dummyScreen" component={DummyScreen} />
        <Stack.Screen name="createSpace" component={CreateSpaceScreen} />
        <Stack.Screen name="selectContacts" component={SelectContactsScreen} />
        <Stack.Screen name="setSpaceGoal" component={SetSpaceGoalScreen} />
        <Stack.Screen name="spacesLanding" component={SpacesLandingScreen} />
        <Stack.Screen name="joinSpace" component={JoinSpaceScreen} />
        <Stack.Screen name="fundSpace" component={FundSpaceScreen} />
        <Stack.Screen name="manageSpace" component={ManageSpaceScreen} />
        <Stack.Screen name="spaceHome" component={SpaceHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
