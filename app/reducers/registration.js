import Immutable from 'immutable'

export default (state = Immutable.Map({}), action) => {
  switch(action.type) {
    case 'REGISTRATION_SUCCEEDED':
        console.log('REGISTRATION_SUCCEEDED');
        return state
    case "REGISTRATION_FAILED":
    	console.log('REGISTRATION_FAILED');
    	return state
    case "SET_USER":
    	console.log('SET USER REDUCER CALLED');
    	return Immutable.fromJS({user: {email: action.user.email, uid: action.user.uid}})
    case "CLEAR_USER":
    	console.log('CLEAR USER REDUCER CALLED');
    	return Immutable.Map({})
    case "LOGOUT_FAILED":
        console.log('LOGOUT FAILED CALLED');
        return state
    case "LOGOUT":
        console.log('LOGOUT REDUCER CALLED');
        return state
    case "LOGIN_FAILED":
        console.log('LOGIN FAILED CALLED');
        console.log(action.message.msg_body);
        return state
    case "LOGIN":
        console.log('LOGIN CALLED');
        return state
    default:
      return state
  }
}