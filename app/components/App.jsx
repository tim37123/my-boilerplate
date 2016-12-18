import React from 'react'
import Alerts from './Alerts';

export default React.createClass({
  render: function() {
    return (
      <div >
      	<Alerts/>
        Hello, world!!! This is the App
        {this.props.children}
      </div>
    );
  }
});