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
import {ButtonsExample} from './src/ButtonsExample';
import {ToastExample} from './src/ToastExample';
import {Home} from './src/Home';
import {Toast} from '@core/toast';
import {TextsExample} from './src/TextsExample';
import {ModalsExample} from './src/ModalsExample';
import {LottieExample} from './src/LottieExample';

export type RootStackParamList = {
  Home: undefined;
  ButtonsExample: undefined;
  ModalsExample: undefined;
  TextsExample: undefined;
  LottieExample: undefined;
  ToastExample: undefined;
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
          name="ButtonsExample"
          component={ButtonsExample}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ModalsExample"
          component={ModalsExample}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TextsExample"
          component={TextsExample}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LottieExample"
          component={LottieExample}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ToastExample"
          component={ToastExample}
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
