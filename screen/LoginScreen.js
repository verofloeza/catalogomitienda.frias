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
import { selectVendedor } from '../store/actions/perfil.action';
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
        dispatch(selectVendedor(email));
    }

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
      <ScrollView style={{backgroundColor: '#fff'}}>
          <View style={[styles.container, {  height:700}]}>
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