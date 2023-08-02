import {Button, TypeButton} from '@core/button';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {height, width} from './constants/Dimensions';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../App';

export const Home = () => {
  const nav = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Button
          type={TypeButton.fullFill}
          text={'Botones'}
          onPress={() => nav.navigate('ButtonsExample')}
        />
        <Button
          type={TypeButton.fullFill}
          text={'Modal'}
          onPress={() => nav.navigate('ModalsExample')}
        />
        <Button
          type={TypeButton.fullFill}
          text={'Text'}
          onPress={() => nav.navigate('TextsExample')}
        />
        <Button
          type={TypeButton.fullFill}
          text={'Lottie'}
          onPress={() => nav.navigate('LottieExample')}
        />
        <Button
          type={TypeButton.fullFill}
          text={'Toast'}
          onPress={() => nav.navigate('ToastExample')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: height,
    width: width,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  menu: {
    height: height * 0.6,
    width: width * 0.8,
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
});
