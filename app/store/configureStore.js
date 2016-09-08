import {
  createStore,
  applyMiddleware,
} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore() {
  const logger = createLogger();
  const middleware = [
    thunk,
    logger,
  ];

  const store = createStore(rootReducer, applyMiddleware(...middleware));

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
