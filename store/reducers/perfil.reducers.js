import { LIST_VENDEDOR, SELECT_VENDEDOR, UPDATE_PERFIL } from '../actions/perfil.action';

const initialState = {
    vendedor: [],
    listVendedores: []
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
                vendedor: action.payload
            }
        case LIST_VENDEDOR:
            return {
                ...state, 
                listVendedores: action.payload
            }
        default:
            return state
    }
}

export default PerfilReducer;