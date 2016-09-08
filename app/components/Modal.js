import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  compose,
  withHandlers,
  setPropTypes,
} from 'recompose';
import Dialog from 'react-native-dialogs';
import {
  FORM_PAGE,
} from '../constants/routes';
import Button from './Button';

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center',
  },
  container: {
    paddingTop: 60,
  },
});

const enhance = compose(
  withHandlers({
    showDialog: () => () => {
      const dialog = new Dialog();
      dialog.set({
        title: 'Hello, World!',
        content: 'I\'m just simple Dialog',
        positiveText: 'OK',
        negativeText: 'Cancel',
      });
      dialog.show();
    },
  }),
  setPropTypes({
    goBack: PropTypes.func.isRequired,
    handleNavigate: PropTypes.func.isRequired,
    showDialog: PropTypes.func.isRequired,
  })
);

const Modal = enhance(({
  goBack,
  handleNavigate,
  showDialog,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Modal Page</Text>
    <Button
      onPress={showDialog}
      label="Show Dialog"
    />
    <Button
      onPress={() => handleNavigate(FORM_PAGE)}
      label="Go To Form"
    />
    <Button
      onPress={goBack}
      label="Go Back"
    />
  </View>
));

export default Modal;
