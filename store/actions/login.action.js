import { URL_API_AUTH, URL_API_AUTH_SIGNIN, URL_DATABASE } from '../../constantes/DataBase';

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_API_AUTH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        })

        if(!response.ok) {
            const errorResponse =  await response.json()
            const errorID = errorResponse.error.message
            console.log(email);
            console.log(password);
            console.log(errorID);
            let message = 'No se ha podido registrar'
            if (errorID === 'EMAIL_EXISTS') message = 'Este email ya está registrado'
            throw new Error(message)
        }

        const data = await response.json()
        dispatch({ 
            type: SIGNUP,
            token: data.idToken,
            user: data.email
        })

        const response2 = await fetch(`${URL_DATABASE}/usuarios.json`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                usuario: email, 
                constrasena: password, 
                token:data.idToken
            })
        })
        await response2.json()  
    }
    
}

export const signin = (email, password) => {
    return async dispatch => {
        const response3 = await fetch(URL_API_AUTH_SIGNIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        })

        if(!response3.ok) {
            const errorResponse3 =  await response3.json()
            const errorID = errorResponse3.error.message
            console.log(errorID);
            let message = 'No se ha podido loguear'
            throw new Error(message)
        }

        const data = await response3.json()
        dispatch({ 
            type: SIGNIN,
            token: data.idToken,
            user: data.email
        })
    }
}
