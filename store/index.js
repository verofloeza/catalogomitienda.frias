import { applyMiddleware, combineReducers, createStore } from 'redux';

import AuthReducer from './reducers/login.reducers';
import CategoriaReducers from './reducers/categoria.reducers';
import ProductosReducer from './reducers/productos.reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    categorias: CategoriaReducers,
    productos: ProductosReducer,
    auth: AuthReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));