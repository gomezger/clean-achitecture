import React from 'react';
import {StyleSheet, View} from 'react-native';
import {height, width} from './constants/Dimensions';
import {Button, TypeButton} from '@core/button';
import {NavigationProps} from '../App';
import {useNavigation} from '@react-navigation/native';
import {LottieImage} from '@core/lottie-image';
import {Test} from './assets/lotties';

export const LottieExample = () => {
  const nav = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <LottieImage height={height * 0.6} lottie={Test} loop={true} />
      <View style={styles.button}>
        <Button
          onPress={() => nav.goBack()}
          text={'Volver'}
          borderColor={'#111'}
          type={TypeButton.onlyBorder}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    width: width * 0.9,
    marginBottom: height * 0.03,
    height: 50,
  },
});
