
// // // include this line for mocking react-native-gesture-handler
// // import 'react-native-gesture-handler/jestSetup';

// // // include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
// // jest.mock('react-native-reanimated', () => {
// //     const Reanimated = require('react-native-reanimated/mock');

// //     // The mock for `call` immediately calls the callback which is incorrect
// //     // So we override it with a no-op
// //     Reanimated.default.call = () => { };

// //     return Reanimated;
// // });

// // // Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// // jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// jest.mock('@react-navigation/native', () => ({
//     useNavigationParam: jest.fn(
//         jest.requireActual('@react-navigation/native').useNavigationParam,
//     ),
//     useNavigation: () => ({
//         state: { params: {} },
//         dispatch: jest.fn,
//         goBack: jest.fn,
//         dismiss: jest.fn,
//         navigate: jest.fn,
//         openDrawer: jest.fn,
//         closeDrawer: jest.fn,
//         toggleDrawer: jest.fn,
//         getParam: jest.fn,
//         setParams: jest.fn,
//         addListener: jest.fn,
//         push: jest.fn,
//         replace: jest.fn,
//         pop: jest.fn,
//         popToTop: jest.fn,
//         isFocused: jest.fn,
//     }),
// }));
