import React, { PropTypes } from 'react';
import {
  View,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
  },
});

const IconButton = ({
  children,
  onPress,
  ...others,
}) => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple('red')}
    onPress={() => onPress()}
    {...others}
  >
    <View style={styles.button}>
      {children}
    </View>
  </TouchableNativeFeedback>
);

IconButton.propTypes = {
  children: PropTypes.any.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default IconButton;
