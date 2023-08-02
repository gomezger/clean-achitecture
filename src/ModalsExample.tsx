import React from 'react';
import {StyleSheet, View} from 'react-native';
import {height, width} from './constants/Dimensions';
import {Button, TypeButton} from '@core/button';
import {NavigationProps} from '../App';
import {useNavigation} from '@react-navigation/native';
import {TypeToast, showToast} from '@core/toast';
import {CustomModal, TypeButtons} from '@core/custom-modal';
import {Text} from '@core/text';

export const ModalsExample = () => {
  const [modalNoButtons, setModalNoButtons] = React.useState(false);
  const [modalOneButton, setModalOneButton] = React.useState(false);
  const [modalTwoButtons, setModalTwoButtons] = React.useState(false);
  const [modalTwoButtonsVertical, setModalTwoButtonsVertical] =
    React.useState(false);

  const nav = useNavigation<NavigationProps>();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            onPress={() => setModalNoButtons(true)}
            text={'Modal No Buttons'}
            backgroundColor={'#111'}
            type={TypeButton.fullFill}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => setModalOneButton(true)}
            text={'Modal One Button'}
            backgroundColor={'#111'}
            type={TypeButton.fullFill}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => setModalTwoButtons(true)}
            text={'Modal Two Buttons'}
            backgroundColor={'#111'}
            type={TypeButton.fullFill}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => setModalTwoButtonsVertical(true)}
            text={'Modal Two Buttons Vertical'}
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
      <CustomModal
        visible={modalNoButtons}
        typeButtons={TypeButtons.NoButtons}
        onRequestClose={() => setModalNoButtons(false)}>
        <Text>Modal de tipo No Buttons</Text>
      </CustomModal>
      <CustomModal
        visible={modalOneButton}
        typeButtons={TypeButtons.OneButton}
        button={{
          text: 'One Button',
          onPress: () => {
            setModalOneButton(false);
          },
        }}
        onRequestClose={() => setModalNoButtons(false)}>
        <Text>Modal de tipo One Button</Text>
      </CustomModal>
      <CustomModal
        visible={modalTwoButtons}
        typeButtons={TypeButtons.TwoButtons}
        button1={{
          text: 'Two Button 1',
          onPress: () => {
            setModalTwoButtons(false);
          },
        }}
        button2={{
          text: 'Two Button 2',
          onPress: () => {
            setModalTwoButtons(false);
          },
        }}
        onRequestClose={() => setModalNoButtons(false)}>
        <Text>Modal de tipo Two Buttons</Text>
      </CustomModal>
      <CustomModal
        visible={modalTwoButtonsVertical}
        typeButtons={TypeButtons.TwoButtonsVertical}
        button1={{
          text: 'Two Button Vertical 1',
          onPress: () => {
            setModalTwoButtonsVertical(false);
          },
        }}
        button2={{
          text: 'Two Button Vertical 2',
          onPress: () => {
            setModalTwoButtonsVertical(false);
          },
        }}
        onRequestClose={() => setModalNoButtons(false)}>
        <Text>Modal de tipo Two Buttons Vertical</Text>
      </CustomModal>
    </>
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
