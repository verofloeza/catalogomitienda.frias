import * as ImagePicker from 'expo-image-picker';

import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import {styles} from '../style';

const ImageSelector = (props) => {
    const [ pickerURI, setPickerURI ] = useState();

    const verifyPermissions = async () => {
       const { status } = await ImagePicker.requestCameraPermissionsAsync();
       console.log(status);
       if(status !== 'granted') {
           Alert.alert('Permisos Insuficientes',
           'Necesita dar permisos de la camara para usar la aplicacion.', 
           [{text: 'Ok'}]
           )
           return false;
       }

       return true;
    }
    const handlerTakeImage = async () => {
        const isCameraOK = await verifyPermissions();
        if(!isCameraOK) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [9,16],
            quality: 0.8
        })

        setPickerURI(image.uri);
        props.onImage(image.uri);
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickerURI 
                    ? (<Text>No hay imagen seleccionada </Text>)
                    : (<Image 
                        style={styles.image}
                        source={{uri: pickerURI}}/>)
                }
            </View>
            <TouchableOpacity onPress={handlerTakeImage}>
                    <View style={[styles.butonsCarrito, styles.accentB]}>
                        <Text style={styles.textButton}>Tomar Foto</Text>
                    </View>         
              </TouchableOpacity>
        </View>
    )
}


export default ImageSelector;