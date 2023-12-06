import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { DummyScreen } from '../screens';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Dummy" component={DummyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}