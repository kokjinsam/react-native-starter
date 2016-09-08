/* eslint-disable no-console */
import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  BackAndroid,
  NavigationExperimental,
} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import Home from './Home';
import About from './About';
import Modal from './Modal';
import Forms from './Forms';
import DrawerContent from './DrawerContent';
import IconButton from './IconButton';

const {
  Transitioner: NavigationTransitioner,
  Card: NavigationCard,
  Header: NavigationHeader,
} = NavigationExperimental;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  leftHeader: {
    flex: 1,
    justifyContent: 'center',
  },
});

class Root extends Component {
  static propTypes = {
    pushRoute: PropTypes.func.isRequired,
    popRoute: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackAction);
  }
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAction);
  }

  handleBackAction = () => {
    if (this.props.navigation.index === 0) {
      return false;
    }

    this.props.popRoute();
    return true;
  }

  handleNavigate = (action) => {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route);
        return true;
      case 'back':
      case 'pop':
        return this.handleBackAction();
      default:
        return false;
    }
  }

  handleCloseDrawer = () => {
    if (this.drawer) {
      this.drawer.closeDrawer();
    }
  }

  handleOpenDrawer = () => {
    if (this.drawer) {
      this.drawer.openDrawer();
    }
  }

  renderScene = ({ scene }) => {
    const { route } = scene;

    switch (route.key) {
      case 'home':
        return (
          <Home
            handleNavigate={this.handleNavigate}
          />
        );
      case 'about':
        return (
          <About
            handleNavigate={this.handleNavigate}
            goBack={this.handleBackAction}
          />
        );
      case 'modal':
        return (
          <Modal
            handleNavigate={this.handleNavigate}
            goBack={this.handleBackAction}
          />
        );
      case 'form':
        return (
          <Forms
            goBack={this.handleBackAction}
          />
        );
      default:
        return null;
    }
  }

  renderLeftHeader = (props) => {
    if (props.scene.index === 0 || !props.onNavigateBack) {
      return (
        <View style={styles.leftHeader}>
          <IconButton onPress={this.handleOpenDrawer}>
            <MDIcon name="menu" size={24} />
          </IconButton>
        </View>
      );
    }

    return (
      <View style={styles.leftHeader}>
        <IconButton onPress={props.onNavigateBack}>
          <MDIcon name="arrow-back" size={24} />
        </IconButton>
      </View>
    );
  }

  renderTitleComponent(props) {
    const title = props.scene.route.title;

    return (
      <NavigationHeader.Title>
        {title}
      </NavigationHeader.Title>
    );
  }

  render() {
    return (
      <DrawerLayout
        drawerWidth={300}
        ref={(drawer) => (this.drawer = drawer)}
        renderNavigationView={() => (<DrawerContent />)}
      >
        <NavigationTransitioner
          navigationState={this.props.navigation}
          style={styles.container}
          render={({
            scene,
            ...others,
          }) => {
            const {
              route,
            } = scene;

            const combinedProps = {
              scene,
              ...others,
            };

            return (
              <View style={styles.container}>
                <NavigationCard
                  {...combinedProps}
                  style={
                    route && route.direction === 'vertical'
                    ? NavigationCard.CardStackStyleInterpolator.forVertical(combinedProps)
                    : undefined
                  }
                  onNavigateBack={this.handleBackAction}
                  panHandlers={null}
                  renderScene={this.renderScene}
                  key={route.key}
                />
                <NavigationHeader
                  {...combinedProps}
                  onNavigateBack={this.handleBackAction}
                  renderLeftComponent={this.renderLeftHeader}
                  renderTitleComponent={this.renderTitleComponent}
                />
              </View>
            );
          }}
        />
      </DrawerLayout>
    );
  }
}

export default Root;
