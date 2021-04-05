import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { Home } from '~/Screens/Home';
import { ProductsDetails } from '~/Screens/ProductsDetails';
import { Order } from '~/Screens/Order';

const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'user';
              break;
            case 'Explore':
              iconName = 'search';
              break;
            case 'Order':
              iconName = 'list';
              break;
            case 'Offers':
              iconName = 'percent';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
            default:
              iconName = 'circle';
              break;
          }

          return (
            <>
              <Icon name={iconName} size={size} color={color} />
            </>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#30BB00',
        inactiveTintColor: '#2B3837',
        showLabel: true,
        labelStyle: {
          fontSize: 14,
        },
      }}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={ProductsDetails} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Offers" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};
export { Navigation };
