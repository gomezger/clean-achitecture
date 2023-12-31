export const mockNavigation = () => {
  // mock navigation
  jest.mock('@react-navigation/native', () => ({
    useNavigationParam: jest.fn(
      jest.requireActual('@react-navigation/native').useNavigationParam,
    ),
    useNavigation: <NavigationProps>() => {
      return {
        state: {params: {}},
        dispatch: jest.fn,
        goBack: jest.fn,
        dismiss: jest.fn,
        navigate: jest.fn,
        openDrawer: jest.fn,
        closeDrawer: jest.fn,
        toggleDrawer: jest.fn,
        getParam: jest.fn,
        setParams: jest.fn,
        addListener: jest.fn,
        push: jest.fn,
        replace: jest.fn,
        pop: jest.fn,
        popToTop: jest.fn,
        isFocused: jest.fn,
      };
    },
  }));
};
