import * as FileSystem from 'expo-file-system';

import { URL_DB_PRODUCTOS } from '../../constantes/DataBase';

export const ADD_PLACE = 'ADD_PLACE';
export const SELECT_PRODUCTOS_VENDEDOR = 'SELECT_PRODUCTOS_VENDEDOR';
export const LIST_PRODUCTOS = 'LIST_PRODUCTOS';


 const orderByUserID = (data, user) => {
     const items = []
     Object.keys(data).forEach(key => items.push({id: key, ...data[key]}))
     return items;
 }


export const addPlace = (title, marca, precio, descripcion, categoria, image, user) => {
    return async dispatch => {

        const response2 = await fetch(`${URL_DB_PRODUCTOS}.json`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                title: title, 
                marca: marca, 
                precio:precio,
                descripcion:descripcion,
                categoria: categoria,
                image: image,
                usuario: user
            })
        })
        await response2.json()

        dispatch({type: ADD_PLACE, payload: {title: title, marca: marca, precio:precio, descripcion:descripcion, categoria: categoria, image: image, usuario: user}});
    }

    
}

export const selectProductosVendedor = (user) => {
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
              dispatch({type: SELECT_PRODUCTOS_VENDEDOR, payload: items, user:user});
            //  const result = await fetchProductos();
            //  console.log(result);
            //  dispatch({type: SELECT_PRODUCTOS_VENDEDOR, productos: result.rows._array });
        } catch (err) {
            console.log(err.message)
            //throw err;
        }
    }
}
export const listProductos = (categoria) => {
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
              dispatch({type: SELECT_PRODUCTOS_VENDEDOR, payload: items, categoriaID: categoria,});
           
        } catch (err) {
            console.log(err.message)
        }
    }
}
