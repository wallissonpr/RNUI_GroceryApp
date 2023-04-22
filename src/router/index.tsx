import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/GetStarted';

export type ScreenStackProps = {
  GetStarted: undefined;
};

const Stack = createNativeStackNavigator<ScreenStackProps>();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
