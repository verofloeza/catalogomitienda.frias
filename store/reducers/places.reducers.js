import { ADD_PLACE, SELECT_PRODUCTOS_VENDEDOR } from '../actions/places.action';

import Place from '../../models/Place';

const initialState = [{
    productosVendedor: []
}];

const PlaceReducers = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            const newPlace = new Place(Date.now(), action.payload.title, action.payload.marca, action.payload.precio,action.payload.descripcion, action.payload.categoria, action.payload.image, action.payload.user);
            return {
                ...state,
                productos: state.productosVendedor.concat(newPlace)
            }
            
        case SELECT_PRODUCTOS_VENDEDOR:
            //console.log(action.payload)
            return {
                    ...state,
                    productosVendedor: action.payload // action.payload trae el array pero no lo coloca en el places
                    // productosVendedor: action.payload.map( item => new Place(
                    //     item.id.toString(),
                    //     item.title,
                    //     item.image,
                    //     item.marca,
                    //     item.precio,
                    //     item.descripcion,
                    //     item.categorias,
                    //     item.usuario
                    // ))
            }
        default:
            return state
    }
}
export default PlaceReducers;