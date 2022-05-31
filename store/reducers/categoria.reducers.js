import { CATEGORIAS }  from '../../data/CATEGORIAS';
import { SELECT_CATEGORY } from "../actions/categoria.action";

const initialState ={
    listCategorias: CATEGORIAS,
    selected: 'Accesorios'
}

const CategoriaReducers = ( state = initialState, action) => {
    switch (action.type){
        case SELECT_CATEGORY:
            const indexCategoria = state.listCategorias.findIndex( cat => cat.nombre === action.categoriaID );
            if(indexCategoria === -1) {return state};
            return {...state, selected: state.listCategorias[indexCategoria]};
        default:
            return {...state, selected: 'Accesorios'};
            //return state;
    }

}

export default CategoriaReducers;