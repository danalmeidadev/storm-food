import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {Home} from '~/Screens/Home';
import {ProductsDetails} from '~/Screens/ProductsDetails';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'user';
              break;
            case 'productsDetails':
              iconName = 'search';
              break;
            case 'Notifications':
              iconName = 'file-text';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
            case 'products':
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
      <Tab.Screen name="productsDetails" component={ProductsDetails} />
      <Tab.Screen name="products" component={ProductsDetails} />
      <Tab.Screen name="Notifications" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};
export {Routes};
