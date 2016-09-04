import React from 'react'

export default React.createClass({
  render: function() {
    return (
      <div >
        Hello, world!!! This is the App

        {this.props.children}
      </div>
    );
  }
});