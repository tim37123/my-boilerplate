/* External dependencies */
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import { createStore, compose, applyMiddleware } from 'redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createLogger from 'redux-logger';
import DevTools from './components/DevTools';

/* Internal dependencies */
import todoReducer from './reducers/todos';
import routerReducer from './reducers/router-reducer';

////////////////////////////////////////////////

/**
 * Combine reducers into root reducer and create store.
 * Note thate 'combineReducers' is a redux-immutable version
 */
const rootReducer = combineReducers({
    todos: todoReducer,
    routing: routerReducer
})

const initialState = Immutable.List(['Code More!']);
const logger = createLogger();

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(logger),
    DevTools.instrument()
  )
);

/* Create enhanced history object for router */
const createSelectLocationState = () => {
  let prevRoutingState, prevRoutingStateJS;
  return (state) => {
    const routingState = state.get('routing'); // or state.routing
    if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }
    return prevRoutingStateJS;
  };
};

const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: createSelectLocationState()
});


////////////////////////////////////////////////

/* Exports */
export { store, history }