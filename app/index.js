import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './components/App';
import About from './components/About';
import Todos from './containers/Todos';
import DevTools from './containers/DevTools';
import {store, history} from './redux-router-init';

ReactDOM.render(
	<Provider store={store}>
		<div>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Todos}/>
				<Route path="/about" component={About}/>
				<Route path="/todos" component={Todos}/>
			</Route>
		</Router>
		{ DEVELOPMENT ? <DevTools/> : ''}
		</div>
	</Provider>,
	document.getElementById('root')
);