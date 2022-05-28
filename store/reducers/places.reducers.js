import { ADD_PLACE, LIST_PRODUCTOS, SELECT_PRODUCTOS_VENDEDOR } from '../actions/places.action';

import Place from '../../models/Place';

const initialState = [{
    productosVendedor: [],
    listProductos: [],
    selected: null
}];

const PlaceReducers = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            const newPlace = new Place(Date.now(), action.payload.title, action.payload.marca, action.payload.precio,action.payload.descripcion, action.payload.categoria, action.payload.image, action.payload.usuario);
            return {
                ...state,
                productos: state.productosVendedor.concat(newPlace)
            }
            
        case SELECT_PRODUCTOS_VENDEDOR:
            return {
                    ...state,
                    productosVendedor: action.payload.filter( item => item.usuario === action.user)
            }
        case LIST_PRODUCTOS:
            return{
                ...state,
                listProductos: action.payload.filter( item => item.categoria === action.categoriaID)
            }
        default:
            return state
    }
}
export default PlaceReducers;