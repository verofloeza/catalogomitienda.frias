export const SELECT_PRODUCTOS = 'SELECT_PRODUCTOS';
export const FILTERED_PRODUCTOS = 'FILTERED_PRODUCTOS';
export const EDIT_PRODUCTOS = 'EDIT_PRODUCTOS';
export const SELECT_PRODUCTOS_VENDEDOR = 'SELECT_PRODUCTOS_VENDEDOR';
export const ADD_PRODUCTO = 'ADD_PRODUCTO';

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

export const editarProducto = (title, marca, precio, descripcion, categoria, image,  id) =>{
    return async dispatch => {

        const response2 = await fetch(`${URL_DB_PRODUCTOS+'/'+id}.json`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                title: title, 
                marca: marca, 
                precio:precio,
                descripcion:descripcion,
                categoria: categoria,
                image: image
            })
        })
        await response2.json()

        dispatch({type: EDIT_PRODUCTOS, payload: {title: title, marca: marca, precio:precio, descripcion:descripcion, categoria: categoria, image: image}});
    }
}

export const deleteProducto = (id, user) =>{
    return async dispatch => {

        const response2 = await fetch(`${URL_DB_PRODUCTOS+'/'+id}.json`, {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json'
            }
        })
        await response2.json()

        const response = await fetch( `${URL_DB_PRODUCTOS}.json` , {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json'
            }
        })

         const result = await response.json()
         const items = orderByUserID(result, 'user')
         dispatch({type: SELECT_PRODUCTOS_VENDEDOR, payload: items, user: user,});


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
        } catch (err) {
            console.log(err.message)
        }
    }
}

export const addProducto = (title, marca, precio, descripcion, categoria, image, user) => {
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

        dispatch({type: ADD_PRODUCTO, payload: {title: title, marca: marca, precio:precio, descripcion:descripcion, categoria: categoria, image: image, usuario: user}});
    }

    
}