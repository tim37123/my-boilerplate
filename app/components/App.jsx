import React from 'react';
import Todos from './Todos';
import { Provider } from 'react-redux'
import store from '../store'

export default React.createClass({
  render() {
    return (
	  <Provider store={store}>
	    <Todos />
	  </Provider>
    );
  }
});