import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/dashboard';
import GenerateDogs from '../screens/generateDogs';
import Routes from './Routes';
import RecentGeneratedDogs from '../screens/recentGeneratedDogs';

const DashboardStack = createNativeStackNavigator();

export default DashboardNavigator = () =>{
  return (
    <DashboardStack.Navigator
    screenOptions={{
      headerShown: true
    }}
  >
<DashboardStack.Screen name={Routes.dashboard_screen} component={Dashboard} />
<DashboardStack.Screen name={Routes.generateDogs_screen} component={GenerateDogs} />
<DashboardStack.Screen name={Routes.recentGeneratedDogs_screen} component={RecentGeneratedDogs} />
    </DashboardStack.Navigator>
  );
}
