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
            case 'home':
              iconName = 'user';
              break;
            case 'productsDetails':
              iconName = 'list';
              break;
            case 'Post':
              iconName = 'edit';
              break;
            case 'Notifications':
              iconName = 'bell';
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

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#9C27B0',
        inactiveTintColor: '#777',
        showLabel: false,
      }}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="productsDetails" component={ProductsDetails} />
      <Tab.Screen name="products" component={ProductsDetails} />
      <Tab.Screen name="Notifications" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};
export {Routes};
