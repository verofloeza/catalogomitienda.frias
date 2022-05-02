import { FILTERED_PRODUCTOS, SELECT_PRODUCTOS } from "../actions/productos.action";

import { PRODUCTOS } from "../../data/PRODUCTOS";

const initialState = {
    productos: PRODUCTOS,
    filteredProductos: [],
    selected: null
}

const ProductosReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_PRODUCTOS:
            return {
                ...state,
                selected: state.productos.find( productos => productos.id === action.productosID )
            }
        case FILTERED_PRODUCTOS:
            return {
                ...state,
                filteredProductos: state.productos.filter( productos => productos.categoria === action.categoriaID )
            }
        default: 
            return state;
    }
    
}

export default ProductosReducer;