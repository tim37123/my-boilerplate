import React from 'react';
import Todos from './Todos';
import { Provider } from 'react-redux';
import store from '../store';
import DevTools from './DevTools';

export default React.createClass({
  render() {
    return (
	  <Provider store={store}>
	  	<div>
		    <Todos />
		    { DEVELOPMENT ? <DevTools/> : ''}
	    </div>
	  </Provider>
    );
  }
});