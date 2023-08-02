import React from 'react';
import {StyleSheet, View} from 'react-native';
import {height, width} from './constants/Dimensions';
import {Button, TypeButton} from '@core/button';
import {NavigationProps} from '../App';
import {useNavigation} from '@react-navigation/native';

export const ButtonsExample = () => {
  const nav = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          backgroundColor={'#111'}
          onPress={() => nav.goBack()}
          text={'Volver FullFill'}
          type={TypeButton.fullFill}
        />
      </View>
      <View style={styles.button}>
        <Button
          type={TypeButton.onlyBorder}
          onPress={() => nav.goBack()}
          text={'Volver OnlyBorder'}
        />
      </View>
      <View style={styles.button}>
        <Button
          type={TypeButton.onlyText}
          onPress={() => nav.goBack()}
          text={'Volver OnlyText'}
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
