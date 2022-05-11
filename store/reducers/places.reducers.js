import { ADD_PLACE, SELECT_PRODUCTOS_VENDEDOR } from '../actions/places.action';

import Place from '../../models/Place';

const initialState = [{
    productos: []
}];

const PlaceReducers = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            const newPlace = new Place(Date.now(), action.payload.title, action.payload.marca, action.payload.precio,action.payload.descripcion, action.payload.categoria, action.payload.image);
            return {
                ...state,
                productos: state.places.concat(newPlace)
            }
            
        case SELECT_PRODUCTOS_VENDEDOR:
            console.log(action.payload)
            return {
                    ...state,
                    productos: action.payload // action.payload trae el array pero no lo coloca en el places
            }
        default:
            return state
    }
}
export default PlaceReducers;