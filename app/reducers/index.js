import {
  combineReducers,
} from 'redux';
import { reducer as formReducer } from 'redux-form';
import navigation from './navigation';

const rootReducer = combineReducers({
  navigation,
  form: formReducer,
});

export default rootReducer;
