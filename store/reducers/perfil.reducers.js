import { SELECT_VENDEDOR, UPDATE_PERFIL } from '../actions/perfil.action';

const initialState = {
    vendedor: []
}

const PerfilReducer = (state = initialState, action) => {    
    switch (action.type) {
        case SELECT_VENDEDOR:
            return {
                ...state, 
                vendedor: action.payload.filter( vend => vend.email === action.user )
            }
        case UPDATE_PERFIL:
            return {
                ...state, 
                vendedor: action.vendedor
            }
        default:
            return state
    }
}

export default PerfilReducer;