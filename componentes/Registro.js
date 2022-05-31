import {
    Image,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useState } from 'react';

import { selectVendedor } from '../store/actions/perfil.action';
import { signup } from '../store/actions/login.action';
import {styles} from '../style';
import { useDispatch } from 'react-redux';

function Registro(props) {
    const { visible, onCancel } = props;
    const dispatch = useDispatch();
    const [ contrasena, setContrasena ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ nombre, setNombre ] = useState('');
    const [ whastapp, setWhastapp ] = useState('');
    const [ empresa, setEmpresa ] = useState('');

    const subirFire = () =>{
       dispatch(signup(nombre, whastapp, empresa, email, contrasena))
    }
    const tomarNombre = (textoNombre) => setNombre(textoNombre);
    const tomarWhastapp = (textoWhastapp) => setWhastapp(textoWhastapp);
    const tomarEmpresa = (textoEmpresa) => setEmpresa(textoEmpresa);
     const tomarEmail = (textoEmail) => setEmail(textoEmail);
     const tomarContrasena = (textoPass) => setContrasena(textoPass)
     
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
                    id='nombre'
                    title='Nombre' 
                    placeholder='Nombre' 
                    style={styles.input}
                    required
                    autoCapitalize='none'
                    onChangeText={tomarNombre}
                />
                <TextInput 
                    id='empresa'
                    title='Empresa' 
                    placeholder='Empresa' 
                    style={styles.input}
                    required
                    autoCapitalize='none'
                    onChangeText={tomarEmpresa}
                />
                <TextInput 
                    id='whastapp'
                    title='Whastapp' 
                    placeholder='Whastapp' 
                    style={styles.input}
                    required
                    autoCapitalize='none'
                    onChangeText={tomarWhastapp}
                />
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
                        <Text style={styles.textButton}>Volver al login</Text>
                    </View>
                                
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
    
  );
}

export default Registro;