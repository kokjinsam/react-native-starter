import React, { PropTypes } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 70,
    backgroundColor: '#22a3ed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'white',
  },
});


const Button = ({
  label,
  onPress,
}) => (
  <TouchableHighlight
    underlayColor="#35b5ff"
    onPress={onPress}
    style={styles.button}
  >
    <Text style={styles.label}>{label}</Text>
  </TouchableHighlight>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
