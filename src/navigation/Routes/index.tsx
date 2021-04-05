import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Navigation } from '..';
import { RestaurantDetails } from '~/Screens/RestaurantDetails';
import Congratulations from '~/Screens/Congratulations';

const Stack = createStackNavigator();
const options = {
  headerShown: false,
};

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Navigation} options={options} />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        options={options}
      />
      <Stack.Screen
        name="congratulations"
        component={Congratulations}
        options={options}
      />
    </Stack.Navigator>
  );
};

export { Routes };
