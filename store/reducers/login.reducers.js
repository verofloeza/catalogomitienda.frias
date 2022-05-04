import { SIGNIN, SIGNUP } from '../actions/login.action'

const initialState = {
    token: null,
    user: null
}

const AuthReducer = (state = initialState, action) => {    
    switch (action.type) {
        case SIGNUP:
            return {...state, token: action.token, user: action.user}
        case SIGNIN:
            return {...state, token: action.token, user: action.user}
        default:
            return state
    }
}

export default AuthReducer;