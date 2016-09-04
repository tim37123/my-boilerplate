import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import DevTools from './components/DevTools';
import todos from './reducers/todos';
import Immutable from 'immutable';
import createLogger from 'redux-logger';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';

const logger = createLogger();
const initialState = Immutable.List(['Code More!']);

export default createStore(
	combineReducers(todos),
	initialState,
	compose(
		applyMiddleware(logger),
		DevTools.instrument()
	)
);