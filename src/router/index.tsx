import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import GetStarted from '../screens/GetStarted';
import {Favorite, Home, Notification, Profile} from '../screens';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import BottomNavigator from '../components/molecules/BottomNavigator';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type RootStackParamList = {
  GetStarted: undefined;
  MainApp: NavigatorScreenParams<TabsStackParamList>;
};

export type TabsStackParamList = {
  Home: undefined;
  Favorite: undefined;
  Notification: undefined;
  Profile: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

export type TabsStackScreenProps<T extends keyof TabsStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabsStackParamList, T>,
    RootStackScreenProps<'MainApp'>
  >;

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
    </RootStack.Navigator>
  );
};

export default Router;
