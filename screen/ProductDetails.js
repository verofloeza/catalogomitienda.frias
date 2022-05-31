import {
    Image,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../constantes/Colors';
import { Ionicons } from '@expo/vector-icons';
import { selectVendedor } from '../store/actions/perfil.action';

export default function ProductDetails({route}) {
    const dispatch = useDispatch();
    const item = useSelector(state => state.productos.selected);
    const vendedor = useSelector(state => state.vendedores.vendedor);
    //const item = route.params.producto;

    useEffect( () => {
        dispatch(selectVendedor(item.usuario));
        
      }, [])
    return (
        <ScrollView style={styles.containerGrid}>
            <Image 
                source={{isStatic:true, uri: item.image,}}
                style={styles.fotoProducto} 
            />
            <View style={styles.containerText}>
                <Text style={styles.tituloProducto}>{item.title}</Text>
                <Text style={styles.marca}>{item.marca}</Text>
                <Text style={styles.precio}>${item.precio}</Text>
                <Text style={styles.descripcion}>{item.descripcion}</Text>
                
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => { Linking.openURL('http://api.whatsapp.com/send?phone=549'+vendedor[0].whastapp
 )}}>
                    <View style={styles.butonsCarrito}>
                        <Ionicons name="logo-whatsapp" size={32} color={Colors.white} style={styles.buttonCart}>
                            <Text style={styles.textButton}> Contactar al vendedor</Text>
                        </Ionicons> 
                    </View>
                    
                </TouchableOpacity>
            </View>
                 
        </ScrollView>
        
    );
  }
  
  const styles = StyleSheet.create({
    containerGrid:{
        flex:1,
        backgroundColor: '#f6f6f6',
        width: "100%",
        paddingTop:20,
        alignContent: 'center',
    },
    fotoProducto: {
        width: '100%',
        height: 400,
        borderRadius: 20
    },
    containerText:{
        flex:1,
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 30
    },
    tituloProducto:{
        width: '100%',
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.primary,
        textAlign: 'center',
        fontFamily: 'MontserratBold'
    },
    precio:{
        width: '100%',
        fontSize: 22,
        fontFamily: 'RobotoBold',
        textAlign: 'center',
        paddingBottom: 30,
    },
    marca:{
        width: '100%',
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.accent,
        paddingBottom: 10,
        textAlign: 'center',
        fontFamily: 'RobotoBold'
    },
    descripcion:{
        width: '100%',
        fontSize: 16,
        paddingBottom: 30,
        textAlign: 'center',
        fontFamily: 'Roboto'
    },
    buttons:{
        flex:1,
        width: '100%',
        padding: 20,
        marginBottom: 30,
        bottom: 50,
        alignContent: 'center',
        justifyContent: 'center',
    },
    buttonCart:{
        padding: 10,
        borderRadius:10,
        backgroundColor: Colors.accent,
        textAlign: 'center',
    },
    textButton:{
        fontSize: 20,
        fontFamily: 'Roboto'
    }
  });