import React from 'react';
import {StyleSheet, View} from 'react-native';
import {height, width} from './constants/Dimensions';
import {Button, TypeButton} from '@core/button';
import {NavigationProps} from '../App';
import {useNavigation} from '@react-navigation/native';
import {TypeToast, showToast} from '@core/toast';

export const ToastExample = () => {
  const nav = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          onPress={() =>
            showToast(TypeToast.SUCCESS, 'Success', 'Toast mostrado con éxito')
          }
          text={'Success Toast'}
          backgroundColor={'#111'}
          type={TypeButton.fullFill}
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() =>
            showToast(TypeToast.ERROR, 'Error', 'Error al mostrar el toast')
          }
          text={'Error Toast'}
          backgroundColor={'#111'}
          type={TypeButton.fullFill}
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() =>
            showToast(TypeToast.INFO, 'Info', 'Información importante')
          }
          text={'Info Toast'}
          backgroundColor={'#111'}
          type={TypeButton.fullFill}
        />
      </View>
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
