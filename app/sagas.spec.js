import test from 'tape';

import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { addTodoAsync, registerUserSaga, login, logout, setUser, clearUser } from './sagas'

test('addTodoAsync Saga test', (assert) => {
	const gen = addTodoAsync({type: 'addTodo', todo: 'hello world!'});

	assert.deepEqual(
		gen.next().value,
		call(delay, 1000),
		'incrementasync should start by yielding to delay'
	)

	assert.deepEqual(
		gen.next().value,
		put({type: 'addTodo', todo: 'hello world!'}),
		'incrementasync should generate new todo action for reducer'
	)

	assert.deepEqual(
		gen.next(),
		{ done: true, value: undefined },
		'incrementasync saga should complete'
	)

	assert.end()
});