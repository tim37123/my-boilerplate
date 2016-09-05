import React from 'react'

export default React.createClass({
 componentDidMount: function(){
 	console.log(this.props.todo)
 },

  render: function() {
    return (
      <div>
      	{this.props.item}
      </div>
    );
  }
});