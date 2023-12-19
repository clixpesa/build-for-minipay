import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { CurrentPotView, LoansInfoView, ActivitiesView } from '../views';

const Tab = createMaterialTopTabNavigator();

export function SpaceTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: 18,
          alignSelf: 'left',
        },
        tabBarStyle: {
          backgroundColor: '#f5f5f5',
          shadowColor: 'transparent',
          marginHorizontal: 10,
          marginTop: 10,
        },
        tabBarPressColor: '#ffffff',
        tabBarIndicatorStyle: {
          backgroundColor: '#ffffff',
          height: 4,
          borderRadius: 5,
        },
      }}
    >
      <Tab.Screen name="pot" component={CurrentPotView} options={{ tabBarLabel: 'Current Pot' }} />
      <Tab.Screen name="loans" component={LoansInfoView} options={{ tabBarLabel: 'Loans' }} />
      <Tab.Screen
        name="activity"
        component={ActivitiesView}
        options={{ tabBarLabel: 'Activity' }}
      />
    </Tab.Navigator>
  );
}
