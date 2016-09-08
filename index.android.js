import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import Root from './app/containers/Root';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

AppRegistry.registerComponent('ReactNativeStarter', () => App);
