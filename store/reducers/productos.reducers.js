import { EDIT_PRODUCTOS, FILTERED_PRODUCTOS, SELECT_PRODUCTOS, SELECT_PRODUCTOS_VENDEDOR } from "../actions/productos.action";

const initialState = {
    productosVendedor: [],
    filteredProductos: [],
    selected: []
}

const ProductosReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_PRODUCTOS:
            return {
                ...state,
                selected: action.payload.find( productos => productos.id === action.productosID )
            }
        case FILTERED_PRODUCTOS:
            return {
                ...state,
                filteredProductos: action.payload.filter( productos => productos.categoria === action.categoriaID )
            }
        case EDIT_PRODUCTOS:
            return {
                ...state,
                selected: action.payload
            }
        case SELECT_PRODUCTOS_VENDEDOR:
            return {
                ...state,
                productosVendedor: action.payload.filter( item => item.usuario === action.user)
            }
        default: 
            return state;
    }
    
}

export default ProductosReducer;