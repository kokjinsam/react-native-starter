import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  ABOUT_PAGE,
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

const Home = ({
  handleNavigate,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Home</Text>
    <Button
      onPress={() => handleNavigate(ABOUT_PAGE)}
      label="Go To About"
    />
  </View>
);

Home.propTypes = {
  handleNavigate: PropTypes.func.isRequired,
};

export default Home;
