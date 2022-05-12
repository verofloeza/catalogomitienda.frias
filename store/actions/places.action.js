import * as FileSystem from 'expo-file-system';

import { URL_DB_PRODUCTOS } from '../../constantes/DataBase';

//import { deleteProductos, fetchProductos, insertProductos } from '../../db';



export const ADD_PLACE = 'ADD_PLACE';
export const SELECT_PRODUCTOS_VENDEDOR = 'SELECT_PRODUCTOS_VENDEDOR';



 const orderByUserID = (data, user) => {
     const items = []
     Object.keys(data).forEach(key => items.push({id: key, ...data[key]}))
     return items;
 }


export const addPlace = (title, marca, precio, descripcion, categoria, image, user) => {
    return async dispatch => {
        const fileName = image.split('/').pop();
        const Path = FileSystem.documentDirectory + fileName; 
        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path,
            })
        } catch (err) {
            console.log(err);
            throw err;
        }

        // const result = await insertProductos(title, Path, marca, precio, descripcion, categoria, user);
        //  console.log("Result database: ");
        //  console.log(result);

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
                image: Path,
                usuario: user
            })
        })
        await response2.json()

        dispatch({type: ADD_PLACE, payload: {title: title, marca: marca, precio:precio, descripcion:descripcion, categoria: categoria, image: Path, usuario: user}});
    }

    
}
export const selectProductosVendedor = () => {
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
             dispatch({type: SELECT_PRODUCTOS_VENDEDOR, payload: items});
            // const result = await fetchProductos();
            // console.log(result);
            // dispatch({type: SELECT_PRODUCTOS_VENDEDOR, productos: result.rows._array });
        } catch (error) {
            console.log(error.message)
            //throw err;
        }
    }
}
