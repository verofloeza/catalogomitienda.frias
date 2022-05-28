export const SELECT_PRODUCTOS = 'SELECT_PRODUCTOS';
export const FILTERED_PRODUCTOS = 'FILTERED_PRODUCTOS';

import { URL_DB_PRODUCTOS } from '../../constantes/DataBase';

const orderByUserID = (data, user) => {
    const items = []
    Object.keys(data).forEach(key => items.push({id: key, ...data[key]}))
    return items;
}

export const selectProductos = (id) => {
    return async dispatch => {
        try {  
             const response = await fetch( `${URL_DB_PRODUCTOS}.json` , {
                 method: 'GET',
                 headers: { 
                     'Content-Type': 'application/json'
                 }
             })
    
              const result = await response.json()
              const items = orderByUserID(result, 'user')
              dispatch({type: SELECT_PRODUCTOS, payload: items, productosID: id,});
           
        } catch (err) {
            console.log(err.message)
        }
    }
} 

export const filteredProductos = (id) => {
    return async dispatch => {
        try {  
             const response = await fetch( `${URL_DB_PRODUCTOS}.json` , {
                 method: 'GET',
                 headers: { 
                     'Content-Type': 'application/json'
                 }
             })
    
              const result = await response.json()
              const items = orderByUserID(result, 'user')
              dispatch({type: FILTERED_PRODUCTOS, payload: items, categoriaID: id,});
           
        } catch (err) {
            console.log(err.message)
        }
    }
}

