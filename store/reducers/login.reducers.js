import { SIGNIN, SIGNUP } from '../actions/login.action'

const initialState = {
    token: null,
    user: null,
    vendedor: []
}

const AuthReducer = (state = initialState, action) => {    
    switch (action.type) {
        case SIGNUP:
            return {...state, token: action.token, user: action.user, vendedor: action.vendedor}
        case SIGNIN:
            return {...state, token: action.token, user: action.user, vendedor: action.vendedor}
        default:
            return state
    }
}

export default AuthReducer;