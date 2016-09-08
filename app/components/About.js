import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  MODAL_PAGE,
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

const About = ({
  goBack,
  handleNavigate,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>About</Text>
    <Button
      onPress={() => handleNavigate(MODAL_PAGE)}
      label="Go To Modal"
    />
    <Button
      onPress={goBack}
      label="Go Back"
    />
  </View>
);

About.propTypes = {
  goBack: PropTypes.func.isRequired,
  handleNavigate: PropTypes.func.isRequired,
};

export default About;
