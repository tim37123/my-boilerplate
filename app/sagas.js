import { takeEvery, delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import Firebaseutils from './utils/firebaseUtils';

export function* watchAddTodo(){
	yield* takeEvery('ADD_TODO_ASYNC', addTodoAsync)
}

export function* addTodoAsync(action){
	yield call(delay, 1000)
	yield put({type: 'addTodo', todo: action.todo})
}

export function* watchSetUser(){
	yield* takeEvery('SET_USER', setUser)
}


export function* setUser(action){
	yield* put({type: 'SET_USER', user: action.user})
}

export function* watchClearUser(){
	yield* takeEvery('CLEAR_USER', clearUser)
}

export function* clearUser(action){
	yield* put({type: 'CLEAR_USER'});
}

export function* watchRegister(){
	yield* takeEvery('REGISTER_USER', register)
}

function* registerFailedHelper(response){
	yield put({type: 'REGISTRATION_FAILED', message: {msg_type: 'error', msg_body: response.errorMessage}})
}

export function* register(action){
	console.log("RegisterUserSaga Called")
    const {error, user} = yield call(Firebaseutils.registerUser,action.creds);
    error ? yield put({type: 'REGISTRATION_FAILED', message: {msg_type: 'error', msg_body: error.message}})
	      : yield put({type: 'REGISTRATER', user});
}

export function* watchLogout(){
	yield* takeEvery('LOGOUT_USER', logout)
}

export function* logout(action){
    const {error, success} = yield call(Firebaseutils.logout);
    error ? yield put({type: 'LOGOUT_FAILED', message: {msg_type: 'error', msg_body: error.message}})
	      : yield put({type: 'LOGOUT'});
}

export function* watchLogin(){
	yield* takeEvery('LOGIN_USER', login)
}

export function* login(action){
    const {error, user} = yield call(Firebaseutils.login,action.creds);
    error ? yield put({type: 'LOGIN_FAILED', message: {msg_type: 'error', msg_body: error.message}})
	      : yield put({type: 'LOGIN', user});
}

export default function* rootSaga() {
  yield [
    watchAddTodo(),
    watchRegister(),
    watchLogout(),
    watchSetUser(),
    watchClearUser(),
    watchLogin()
  ]
}