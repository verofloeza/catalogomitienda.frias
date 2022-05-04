import {
    Image,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useState } from 'react';

import { signup } from '../store/actions/login.action';
import {styles} from '../style';
import { useDispatch } from 'react-redux';

function Registro(props) {
    const { visible, onCancel } = props;
    const dispatch = useDispatch();
    const [ contrasena, setContrasena ] = useState('');
    const [ email, setEmail ] = useState('');

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
    <Modal
        animationType="slide"
        visible={visible}
        transparent={true}
    >
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
                <TouchableOpacity onPress={subirFire}>
                    <View style={[styles.butonsCarrito, styles.accentB]}>
                        <Text style={styles.textButton}>Registrarme</Text>
                    </View>
                                
                </TouchableOpacity>
                <TouchableOpacity onPress={onCancel.bind(this)}>
                    <View style={[styles.butonsCarrito, styles.primaryB]}>
                        <Text style={styles.textButton}>Cerrar</Text>
                    </View>
                                
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
    
  );
}

export default Registro;