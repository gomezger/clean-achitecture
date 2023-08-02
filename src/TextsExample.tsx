import React from 'react';
import {StyleSheet, View} from 'react-native';
import {height, width} from './constants/Dimensions';
import {Button, TypeButton} from '@core/button';
import {NavigationProps} from '../App';
import {useNavigation} from '@react-navigation/native';
import {TypeToast, showToast} from '@core/toast';
import {FontWeight, Text, TextVariant} from '@core/text';

export const TextsExample = () => {
  const nav = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <Text variant={TextVariant.BODY} textAlign="center">
        BODY
      </Text>
      <Text variant={TextVariant.BUTTON} textAlign="center">
        BUTTON
      </Text>
      <Text variant={TextVariant.H00} textAlign="center">
        H00
      </Text>
      <Text variant={TextVariant.H0} textAlign="center">
        H0
      </Text>
      <Text variant={TextVariant.H1} textAlign="center">
        H1
      </Text>
      <Text variant={TextVariant.H2} textAlign="center">
        H2
      </Text>
      <Text variant={TextVariant.H3} textAlign="center">
        H3
      </Text>
      <Text variant={TextVariant.H4} textAlign="center">
        H4
      </Text>
      <Text variant={TextVariant.H5} textAlign="center">
        H5
      </Text>
      <Text variant={TextVariant.H6} textAlign="center">
        H6
      </Text>
      <Text variant={TextVariant.H7} textAlign="center">
        H7
      </Text>
      <Text
        variant={TextVariant.H5}
        fontWeight={FontWeight.FW100}
        textAlign="center">
        FW100
      </Text>
      <Text
        variant={TextVariant.H5}
        fontWeight={FontWeight.FW200}
        textAlign="center">
        FW200
      </Text>
      <Text
        variant={TextVariant.H5}
        fontWeight={FontWeight.FW300}
        textAlign="center">
        FW300
      </Text>
      <Text
        variant={TextVariant.H5}
        fontWeight={FontWeight.FW400}
        textAlign="center">
        FW400
      </Text>
      <Text
        variant={TextVariant.H5}
        fontWeight={FontWeight.FW500}
        textAlign="center">
        FW500
      </Text>
      <Text
        variant={TextVariant.H5}
        fontWeight={FontWeight.FW600}
        textAlign="center">
        FW600
      </Text>
      <Text
        variant={TextVariant.H5}
        fontWeight={FontWeight.FW700}
        textAlign="center">
        FW700
      </Text>
      <Text
        variant={TextVariant.H5}
        fontWeight={FontWeight.FW800}
        textAlign="center">
        FW800
      </Text>
      <Text
        variant={TextVariant.H5}
        fontWeight={FontWeight.FW900}
        textAlign="center">
        FW900
      </Text>
      <Text
        variant={TextVariant.H5}
        fontWeight={FontWeight.BOLD}
        textAlign="center">
        BOLD
      </Text>
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
