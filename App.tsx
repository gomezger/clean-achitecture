/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {Home} from './src/Home';
import {Toast} from '@core/toast';
import { AddTodo } from './src/container/AddTodo/add-todo.container';

export type RootStackParamList = {
  Home: undefined;
  AddTodo: undefined;
};
const Stack = createNativeStackNavigator();
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const App = (): JSX.Element => {
  const navigationRef =
    React.useRef<NavigationContainerRef<RootStackParamList> | null>(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddTodo"
          component={AddTodo}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default App;
