import {
  NavigationExperimental,
} from 'react-native';
import {
  handleActions,
} from 'redux-actions';
import {
  NAV_PUSH,
  NAV_POP,
} from '../constants/actionTypes';

const {
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

const defaultState = {
  index: 0,
  key: 'root',
  routes: [{
    key: 'home',
    title: 'Home',
    direction: 'horizontal',
  }],
};

const navigationReducer = {
  [NAV_PUSH]: (state, action) => {
    if (state.routes[state.index].key === (action.payload.route && action.payload.route.key)) {
      return state;
    }

    return NavigationStateUtils.push(state, action.payload.route);
  },

  [NAV_POP]: (state) => {
    if (state.index === 0 || state.routes.length === 1) {
      return state;
    }

    return NavigationStateUtils.pop(state);
  },
};

export default handleActions(navigationReducer, defaultState);
