import React from 'react';
import Todos from './Todos';
import About from './About';
import { Provider } from 'react-redux';
import store from '../store';
import DevTools from './DevTools';
import { Router, Route, hashHistory } from 'react-router'

export default React.createClass({
  render() {
    return (
	  <Provider store={store}>
	  	<div>
	  	  <Router history={hashHistory}>
		    <Route path="/" component={Todos}/>
		    <Route path="/about" component={About}/>
		  </Router>
		    { DEVELOPMENT ? <DevTools/> : ''}
	    </div>
	  </Provider>
    );
  }
});