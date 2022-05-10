import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useCallback, useState } from 'react';

import Registro from '../componentes/Registro';
import { signin } from '../store/actions/login.action';
import {styles} from '../style';
import { useDispatch } from 'react-redux';

function LoginScreen() {
    
    const dispatch = useDispatch();
    const [ contrasena, setContrasena ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ modalVisible, setModalVisible] = useState(false);

    const registrar = () =>{
        setModalVisible(!modalVisible);
    }

    const loguear = () => {
        dispatch(signin(email, contrasena));
    }

    // const loguear = React.useCallback(async() => {
    //     try {
    //         await auth.signInWithEmailAndPassword(email, contrasena)  
    //         setEmail('')
    //         setContrasena('')
    //         setError(null)
    //         //props.history.push('/admin') 
    //         console.log('LOGUEADO')
    //     } catch (error) {
    //         if(error.code === 'auth/user-not-found'){
    //             setError('Usuario o contraseña incorrecta')
    //         }
    //         if(error.code === 'auth/wrong-password'){
    //             setError('Usuario o contraseña incorrecta')
    //         }
    //         console.log(error.code)
    //         console.log(error.message)
    //     }
    // }, [email, contrasena])

     const tomarEmail = (textoEmail) => {
         setEmail(textoEmail);
        
     }
     const tomarContrasena = (textoPass) => {
         setContrasena(textoPass)
     }
     const closeModal = () => {
        setModalVisible(!modalVisible);
      }
  return (
      <ScrollView>
          <View style={styles.container}>
            <View style={styles.containerLogin}>  
                <View style={styles.logoLogin}>
                    <Image 
                        source={require('../assets/logo-mitienda.png')}
                        style={styles.logo} 
                    />
                </View>
                <TextInput 
                    id='email'
                    title='Email' 
                    placeholder='Email' 
                    style={styles.input}
                    keyboardType="email-address"
                    required
                    email
                    autoCapitalize='none'
                    onChangeText={tomarEmail}
                />
                <TextInput 
                    id="password"
                    title='contraseña' 
                    placeholder='Contraseña' 
                    style={styles.input}
                    secureTextEntry
                    required
                    minLength={6}
                    autoCapitalize='none'
                    onChangeText={tomarContrasena}
                />
                <TouchableOpacity onPress={loguear}>
                    <View style={[styles.butonsCarrito, styles.accentB]}>
                        <Text style={styles.textButton}>Login</Text>
                    </View>
                                
                </TouchableOpacity>
                <TouchableOpacity onPress={registrar}>
                    <View style={[styles.butonsCarrito, styles.primaryB]}>
                        <Text style={styles.textButton}>Registrarse</Text>
                    </View>
                                
                </TouchableOpacity>
            </View>
            <Registro visible={modalVisible} onCancel={closeModal}/>
        </View>
      </ScrollView>
        
  );
}

export default LoginScreen;