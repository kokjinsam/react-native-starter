import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
  },
});

const DrawerContent = () => (
  <View style={styles.container}>
    <Text>About</Text>
  </View>
);

export default DrawerContent;
