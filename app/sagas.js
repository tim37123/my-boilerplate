import { takeEvery, delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import Firebaseutils from './utils/firebaseUtils';

function* registerSuccessHelper(response){
	console.log('register success called');
	yield put({type: 'REGISTRATION_SUCCESSFUL', user: response})
}

function* registerFailedHelper(response){
	console.log('register failed called');
	console.log(response.errorMessage);
	yield put({type: 'REGISTRATION_FAILED', message: {msg_type: 'error', msg_body: response.errorMessage}})
}

export function* addTodoAsync(action){
	yield call(delay, 1000)
	yield put({type: 'addTodo', todo: action.todo})
}

export function* registerUserSaga(action){
	console.log("RegisterUserSaga Called")
    const {error, user} = yield call(Firebaseutils.registerUser,action.creds);
    error ? yield put({type: 'REGISTRATION_FAILED', message: {msg_type: 'error', msg_body: error.message}})
	      : yield put({type: 'REGISTRATION_SUCCESSFUL', user});
}

export function* setUser(action){
	console.log('set user saga called');
	yield* put({type: 'SET_USER', user: action.user})
}

export function* clearUser(action){
	console.log('clear user saga called');
	yield* put({type: 'CLEAR_USER'});
}

export function* logout(action){
	console.log("logout saga Called")
    const {error, success} = yield call(Firebaseutils.logout);
    error ? yield put({type: 'LOGOUT_FAILED', message: {msg_type: 'error', msg_body: error.message}})
	      : yield put({type: 'LOGOUT'});
}

export function* login(action){
	console.log("LoginSaga Called")
    const {error, user} = yield call(Firebaseutils.login,action.creds);
    error ? yield put({type: 'LOGIN_FAILED', message: {msg_type: 'error', msg_body: error.message}})
	      : yield put({type: 'LOGIN', user});
}

export function* watchLogout(){
	console.log('logout watcher called')
	yield* takeEvery('LOGOUT_ASYNC', logout)
}

export function* watchAddTodo(){
	console.log('WATCHADDTODOCALLED');
	yield* takeEvery('ADD_TODO_ASYNC', addTodoAsync)
}

export function* watchRegister(){
	console.log("WatchRegister Called")
	yield* takeEvery('REGISTER_USER', registerUserSaga)
}

export function* watchSetUser(){
	console.log('watchSetUserCalled')
	yield* takeEvery('SET_USER', setUser)
}

export function* watchLogin(){
	console.log('watchLoginCalled')
	yield* takeEvery('LOGIN_ASYNC', login)
}

export function* watchClearUser(){
	yield* takeEvery('CLEAR_USER', clearUser)
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