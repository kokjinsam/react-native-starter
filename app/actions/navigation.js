import {
  createAction,
} from 'redux-actions';
import {
  NAV_PUSH,
  NAV_POP,
} from '../constants/actionTypes';

const push = createAction(NAV_PUSH, (route) => ({
  route,
}));

const pop = createAction(NAV_POP);

export {
  push,
  pop,
};
