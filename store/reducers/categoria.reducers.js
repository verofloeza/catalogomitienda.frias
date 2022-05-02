import { CATEGORIAS }  from '../../data/CATEGORIAS';
import { SELECT_CATEGORY } from "../actions/categoria.action";

const initialState ={
    listCategorias: CATEGORIAS,
    selected: 1
}

const CategoriaReducers = ( state = initialState, action) => {
    switch (action.type){
        case SELECT_CATEGORY:
            const indexCategoria = state.listCategorias.findIndex( cat => cat.id === action.categoriaID );
            if(indexCategoria === -1) {return state};
            return {...state, selected: state.listCategorias[indexCategoria]};
        default:
            return {...state, selected: 1};
            //return state;
    }

}

export default CategoriaReducers;