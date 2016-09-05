import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo } from '../actions'

import Todo from './Todo';

const Todos = ({todos, dispatch}) => (
  <div>
    <h1>Todos</h1>
    <NewTodo onChange={e => {
						      if(e.keyCode == 13){
						        dispatch(addTodo(e.target.value))
						        e.target.value = ''
						      }}}/>
    {todos.map(todo => <Todo key={todo} item={todo}></Todo>)}
  </div>
)

function mapStateToProps(state) {
  return {
    todos: state.get('todos')
  }
}

export default connect(mapStateToProps)(Todos)