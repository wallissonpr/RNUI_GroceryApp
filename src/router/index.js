import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/GetStarted';
import {Favorite, Home, Notification, Profile} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomNavigator from '../components/molecules/BottomNavigator';
import Categories from '../screens/Categories';
import Detail from '../screens/Details';

const RootStack = createNativeStackNavigator();

const TabsStack = createBottomTabNavigator();

function MainApp() {
  return (
    <TabsStack.Navigator tabBar={BottomNavigator}>
      <TabsStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <TabsStack.Screen
        name="Favorite"
        component={Favorite}
        options={{headerShown: false}}
      />
      <TabsStack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <TabsStack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </TabsStack.Navigator>
  );
}

const Router = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Categories"
        component={Categories}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default Router;
