import {NativeModules} from 'react-native';

//----------------------------------
//--control de que están definidos--
//----------------------------------

if (NativeModules.TodoModule === null) {
  throw new Error('NativeModules.TodoModule is null');
}

export const {
  TodoModule
} = NativeModules;
