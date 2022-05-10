import { ADD_PLACE, SELECT_PRODUCTOS_VENDEDOR } from './places.action';

import Place from '../models/Place';

const initialState = {
    places: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            console.log("ADD_PLACE");
            const newPlace = new Place(Date.now(), action.payload.title, action.payload.marca, action.payload.precio,action.payload.descripcion, action.payload.categoria, action.payload.image);
            console.log(newPlace);
            return {
                ...state,
                places: state.places.concat(newPlace),
            }
        case SELECT_PRODUCTOS_VENDEDOR:
            console.log('SELECT_PRODUCTOS_VENDEDOR')
            return {
                    ...state,
                    places: action.payload
            }
        default:
            return state
    }
}