import { takeEvery, delay } from 'redux-saga';
import { put } from 'redux-saga/effects';

export function* addTodoAsync(action){
	yield delay(1000)
	yield put({type: 'addTodo', todo: action.todo})
}

export function* watchAddTodo(){
	yield* takeEvery('ADD_TODO_ASYNC', addTodoAsync)
}

export default function* rootSaga() {
  yield [
    watchAddTodo()
  ]
}