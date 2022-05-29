import * as FileSystem from 'expo-file-system';

import { URL_DATABASE } from '../../constantes/DataBase';

export const UPDATE_VENDEDOR = 'UPDATE_VENDEDOR';
export const SELECT_VENDEDOR = 'SELECT_VENDEDOR';


 const orderByUserID = (data, user) => {
     const items = []
     Object.keys(data).forEach(key => items.push({id: key, ...data[key]}))
     return items;
 }


export const updatePerfil = (nombre, empresa, whastapp, image, id) => {
    return async dispatch => {

        const response2 = await fetch(`${URL_DATABASE+'/'+id}.json`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                nombre: nombre, 
                empresa: empresa, 
                whastapp: whastapp,
                image: image
            })
        })
        await response2.json()

        dispatch({type: UPDATE_VENDEDOR, payload: {
                nombre: nombre, 
                empresa: empresa, 
                whastapp: whastapp
        }});
    }

    
}
export const selectVendedor = (user) => {
    return async dispatch => {
        try {  
             const response = await fetch( `${URL_DATABASE}.json` , {
                 method: 'GET',
                 headers: { 
                     'Content-Type': 'application/json'
                 }
             })
              
              const result = await response.json()
              const items = orderByUserID(result, 'user')
              dispatch({type: SELECT_VENDEDOR, payload: items, user: user});
           
        } catch (err) {
            console.log(err.message)
        }
    }
}
