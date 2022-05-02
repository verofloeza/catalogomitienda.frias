import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useState } from 'react';

import { signup } from '../store/actions/login.action';
import {styles} from '../style';
import { useDispatch } from 'react-redux';

function LoginScreen() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');

    const subirFire = () =>{
        dispatch(signup(email, contrasena))
    }

    const tomarEmail = (textoEmail) => {
        setEmail(textoEmail);
        
    }
    const tomarContrasena = (textoPass) => {
        setContrasena(textoPass)
    }
  return (
        <View style={styles.container}>
            <View style={styles.containerLogin}>  
                <View style={styles.logoLogin}>
                    <Image 
                        source={require('../assets/logo-mitienda.png')}
                        style={styles.logo} 
                    />
                </View>
                <TextInput 
                    title='Email' 
                    placeholder='Email' 
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize='none'
                    onChangeText={tomarEmail}
                />
                <TextInput 
                    title='contraseña' 
                    placeholder='Contraseña' 
                    style={styles.input}
                    secureTextEntry
                    autoCapitalize='none'
                    onChangeText={tomarContrasena}
                />
                <TouchableOpacity onPress={subirFire}>
                    <View style={styles.butonsCarrito}>
                        <Text style={styles.textButton}>Login</Text>
                    </View>
                                
                </TouchableOpacity>
            </View>
        </View>
      
    
  );
}

export default LoginScreen;