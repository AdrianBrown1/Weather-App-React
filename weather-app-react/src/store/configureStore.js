import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import loggingMiddleware from './middlewear/logging';

export default function configureStore(initialState) {
  let middleware;
  if (process.env.NODE_ENV !== 'production') {
    middleware = applyMiddleware(thunk, loggingMiddleware);
  } else {
    middleware = applyMiddleware(thunk);
  }
  return createStore(rootReducer, initialState, middleware);
}
